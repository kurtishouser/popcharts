# PopCharts

Exploring world population data with charts.

[PopCharts](http://www.popcharts.xyz/) is my Q1 Project for the [Web Development Immersive](http://www.galvanize.com/san-francisco/web-development) at [Galvanize - San Francisco](http://www.galvanize.com/san-francisco).

Utilizing the [World Population API](http://api.population.io/), PopCharts displays the data as set of graphs (described below) using the [C3](http://c3js.org/) visualization library.

## The Charts

There are four charts on the page for age, year, country and life expectancy.

### Age Chart (Line)
The age chart displays the population for a given country at a given by age group (0 - 100 years old). In addition to the total, the gender of each age group is displayed separately.

![age-chart](https://cloud.githubusercontent.com/assets/5109163/26257931/58697964-3c77-11e7-9b41-3f5731c4ae95.jpg)

### Year Chart (Line)
The year chart displays the change in population of a given age group over time. The data provided by the API starts at 1950 and estimates through 2100. I've chosen to limit this to 2025. As above, total and gender are displayed separately.
![year-chart](https://cloud.githubusercontent.com/assets/5109163/26257936/5b5c0592-3c77-11e7-9cbc-7dd4c6891b5f.jpg)

### Country Chart (Bar)
Similar to the year chart, the country chart also displays the population of a given age group on a given year, but for all countries in the world. Breakdown is by gender. The total is indicated by the overall height of the bar.

![country-chart](https://cloud.githubusercontent.com/assets/5109163/26257938/6149fe50-3c77-11e7-989c-cb48c8389001.jpg)

### Life Expectancy Chart
Given the gender, birthdate and country, the life expectancy chart will display the estimated lifespan of an individual at that age in all countries of the world. The country selected is highlighted.

![life-expectancy-chart](https://cloud.githubusercontent.com/assets/5109163/26257940/65a26f50-3c77-11e7-9d1b-ef5aa7140aa0.jpg)


#### Interested in more?
[population.io](http://population.io/) also uses the [World Population API](http://api.population.io/).
