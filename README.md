# Capital Bikeshare Operations & Demand Dashboard

An executive operations and rider demand analytics dashboard for the **Capital Bikeshare** system in Washington, D.C. (2011–2012).

---

## 🚀 Overview

This dashboard visualizes rental patterns, fleet capacity, member/casual utilization, and weather impacts across 17,379 hourly logs and 731 operational days.

### Key Features

- **Executive KPI Cards**: Real-time totals, daily averages, and splits between Registered Rentals and Casual Rentals.
- **Rental Type Mix & Gauge**: Semi-circular segmented radial gauge showing Registered vs. Casual split, plus weekly day-by-day trendlines (Volume & % Share).
- **Interactive Multi-View Bar Chart**:
  - **Monthly Demand**: 12-month seasonality, weather overlays, and registered/casual breakdowns.
  - **Hourly Demand (0–23h)**: Peak commuter surges (8:00 AM & 5:00 PM) vs. midday leisure patterns.
  - **Seasonal Analysis**: Spring, Summer, Fall, and Winter distribution.
  - **Weather Impact**: Clear/Partly Cloudy, Mist/Cloudy, and Rain/Snow comparison.
- **24-Hour × 7-Day Demand Heatmap**: Full 168-cell matrix computed directly from 17,379 hourly records with live hover inspector.
- **Dynamic Filters**: Year selection (All, 2011, 2012) and Day Type filters (All Days, Working Days, Weekends & Holidays) with instant recalculation.

---

## 📁 Repository Structure

```
├── capital_bikeshare_operations_demand_dashboard (1).html  # Core dashboard application
├── index.html                                              # Entry point redirect
├── server.js                                               # Lightweight Node.js dev server with LiveReload
├── package.json                                            # NPM package scripts
├── day.csv                                                 # Daily aggregated dataset (731 days)
├── hour.csv                                                # Hourly logs dataset (17,379 hours)
├── Readme.txt                                              # Source dataset documentation
└── .gitignore
```

---

## 🛠️ Getting Started

### Option 1: Using the Node.js Server (Recommended)

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Start the local server:
   ```bash
   npm start
   ```
   *or*
   ```bash
   node server.js
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Option 2: Direct Browser Launch

You can open `index.html` or `capital_bikeshare_operations_demand_dashboard (1).html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## 📊 Dataset Attribution

Dataset sourced from the **Capital Bikeshare** system (Washington D.C., USA), compiled and aggregated by:
- Hadi Fanaee-T, Laboratory of Artificial Intelligence and Decision Support (LIAAD), University of Porto.
