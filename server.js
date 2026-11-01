const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DEFAULT_PORT = 3000;
const ROOT_DIR = __dirname;
const MAIN_HTML = 'capital_bikeshare_operations_demand_dashboard (1).html';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

// Live reload SSE clients
const sseClients = new Set();

function broadcastReload() {
  for (const client of sseClients) {
    client.write('data: reload\n\n');
  }
}

// Watch directory for changes (debounced)
let reloadTimeout = null;
fs.watch(ROOT_DIR, { recursive: false }, (eventType, filename) => {
  if (!filename) return;
  const ext = path.extname(filename).toLowerCase();
  if (['.html', '.css', '.js', '.csv', '.json', '.txt'].includes(ext)) {
    if (reloadTimeout) clearTimeout(reloadTimeout);
    reloadTimeout = setTimeout(() => {
      console.log(`[DevServer] Detected change in ${filename}. Reloading clients...`);
      broadcastReload();
    }, 100);
  }
});

const LIVE_RELOAD_SNIPPET = `
<script>
  (function() {
    try {
      const source = new EventSource('/__livereload');
      source.onmessage = function(event) {
        if (event.data === 'reload') {
          console.log('[DevServer] Live reload triggered.');
          window.location.reload();
        }
      };
      source.onerror = function() {
        // SSE will attempt reconnection automatically
      };
    } catch(e) {}
  })();
</script>
</body>`;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // SSE endpoint
  if (pathname === '/__livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(': connected\n\n');
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // Map root to MAIN_HTML
  if (pathname === '/' || pathname === '/index.html') {
    pathname = '/' + MAIN_HTML;
  }

  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    if (ext === '.html') {
      fs.readFile(filePath, 'utf8', (readErr, content) => {
        if (readErr) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
          return;
        }

        // Inject live reload script before </body>
        const injected = content.includes('</body>')
          ? content.replace('</body>', LIVE_RELOAD_SNIPPET)
          : content + LIVE_RELOAD_SNIPPET;

        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        res.end(injected);
      });
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Length': stats.size
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Capital Bikeshare Dashboard Dev Server Running!`);
    console.log(`📡 URL: http://localhost:${port}/`);
    console.log(`🔄 Live reload active (auto-refreshes on file save)`);
    console.log(`==================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
