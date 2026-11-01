# Capital Bikeshare — Operations & Demand Dashboard

**[View Live Dashboard](https://wisemirza.github.io/Capital-bikeshare-dashboard/)**

A self-directed data analytics portfolio project exploring historical bike rental patterns in Washington, D.C. The project transforms bike-sharing data into an interactive dashboard designed from the perspective of an Operations Manager.

## Dashboard Preview

*Dashboard overview, including key metrics and rental demand visualisations.*

![Full Dashboard with Demand Heatmap](screenshot/_C__anti-gravity_Dashboardelbr_capital_bikeshare_operations_demand_dashboard%2520%281%29.html%28Nest%20Hub%20Max%29.png)

**[Try the Dashboard Live](https://wisemirza.github.io/Capital-bikeshare-dashboard/)**

*Full dashboard view, including the 7-day by 24-hour demand heatmap.*

## About the Project

I asked AI to simulate a real-world entry-level Data Analyst assignment so I could assess and develop my practical skills.

AI helped establish the project brief, selected the dataset, identified an Operations Manager as the intended stakeholder, and defined the business questions the dashboard should help explore.

The objective was to turn historical rental information into something an Operations Manager could understand at a glance, making it easier to explore demand patterns and compare different aspects of bike usage.

This is an independent portfolio exercise and was not commissioned by or affiliated with Capital Bikeshare.

## What Does the Dashboard Show?

- **Overall demand:** Total rentals, average daily demand and rental breakdowns.
- **Registered vs. casual rentals:** Differences between the two rider categories.
- **Monthly and seasonal patterns:** How rental demand changes throughout the year.
- **Hourly and weekly activity:** Which hours and days experience higher rental volumes.
- **Weather conditions:** How rental activity varies under different weather conditions.
- **Demand heatmap:** A visual breakdown of activity across all seven days and 24 hours.

Users can also filter the dashboard by year (2011 or 2012) and day type.

## Data and Preparation

The project uses the **[UCI Bike Sharing Dataset](https://archive.ics.uci.edu/dataset/275/bike%2Bsharing%2Bdataset)**, containing historical Capital Bikeshare records from 2011–2012.

The dataset includes 17,379 hourly records and 731 daily records, covering rental counts, dates, times, weather conditions and rider categories.

The data was relatively clean and required limited preparation. Most of the work involved checking the available fields and making certain measurements easier to understand. For example, normalised temperature values were converted into degrees Celsius using the dataset's documented scale factors.

## My Contribution and Use of AI

AI played a significant role throughout this project, but the development process involved both AI assistance and my own decisions.

**My contribution:** I directed the dashboard's visual design, layout, structure and presentation. I decided how information should be organised, which metrics and charts to include, and which design elements needed to be changed or refined. I reviewed the iterations and made the final decisions about the dashboard's appearance and content.

**AI assistance:** I primarily used Google's Gemini model to generate much of the application code, assist with repetitive data tasks and calculations, and troubleshoot technical issues during development.

The project gave me an opportunity to practise translating a business-oriented brief into a visual dashboard, working with real datasets, making presentation decisions and using AI tools as part of a development workflow.

## Technology

- HTML, CSS and JavaScript
- Chart.js
- Tailwind CSS
- GitHub
- GitHub Pages for hosting

## Limitations

This dashboard uses historical data from 2011–2012. It is an exploratory portfolio project, not a live monitoring system. Rental counts represent trips rather than unique individual customers, and observed relationships between weather and demand should not automatically be interpreted as proof of causation.

## Dataset Acknowledgement

**Source:** [UCI Machine Learning Repository — Bike Sharing Dataset](https://archive.ics.uci.edu/dataset/275/bike%2Bsharing%2Bdataset)

Dataset compiled by Hadi Fanaee-T, Laboratory of Artificial Intelligence and Decision Support (LIAAD), University of Porto.

Associated research:

Fanaee-T, H. and Gama, J. (2013). *Event labeling combining ensemble detectors and background knowledge*. Progress in Artificial Intelligence.

[https://doi.org/10.1007/s13748-013-0040-3](https://doi.org/10.1007/s13748-013-0040-3)
