// uncomment these to start with populated graphs
// getPopulationByYearAndCountry(2010, 'United States')
//   .then(populationData => drawLineChart('#year-chart', populationData, 0))
//   .catch(catchErr);
//
// getPopulationByAgeGroupAndCountry(25, 'United States')
//   .then(populationData => drawLineChart('#age-chart', populationData, 1950))
//   .catch(catchErr);


// getTotlaLifeExpectancy('male', 'United States', '1980-01-01')
//   .then(logAndContinue)
//   .catch(catchErr);

// Retrieve population tables for a given year and country
function getPopulationByYearAndCountry(year, country) {
  let url = `http://api.population.io:80/1.0/population/${year}/${country}/`;
  // let data = getJsonFromFetch(url);
  return getJsonFromFetch(url)
    .then(populationTable => {
        let columnValues = [];
        let males = ['Males - ' + year + ' - ' + country];
        let females = ['Females - ' + year + ' - ' + country];
        let total = ['Total - ' + year + ' - ' + country];

        populationTable.filter(item => item.year <= 2025) // predicts thru 2100 otherwise!
          .forEach(item => {
            males.push(item.males);
            females.push(item.females);
            total.push(item.total);
          });

        columnValues.push(males);
        columnValues.push(females);
        columnValues.push(total);
        return columnValues;
      });
}

// Retrieve population tables for a specific age group in the given country
function getPopulationByAgeGroupAndCountry(age, country) {
  let url = `http://api.population.io/1.0/population/${country}/${age}/`;
  return getJsonFromFetch(url)
    .then(populationTable => {
        let columnValues = [];
        let males = ['Males - ' +  age + ' yrs - ' + country];
        let females = ['Females - ' +  age + ' yrs - ' + country];
        let total = ['Total - ' +  age + ' yrs - ' + country];

        populationTable.filter(item => item.year <= 2025) // predicts thru 2100 otherwise
          .forEach(item => {
            males.push(item.males);
            females.push(item.females);
            total.push(item.total);
          });

        columnValues.push(males);
        columnValues.push(females);
        columnValues.push(total);
        return columnValues;
    })
}

// Calculate total life expectancy
function getTotlaLifeExpectancy(sex, country, dob) {
  let url = `http://api.population.io/1.0/life-expectancy/total/${sex}/${country}/${dob}/`
  return getJsonFromFetch(url)
    .then(json => json.total_life_expectancy);
}

function getJsonFromFetch(url) {
  return fetch(url)
    .then(response => response.json());
}

function catchErr(err) {
  throw new Error(err);
}

function logAndContinue(value) {
  console.log(value);
  return value;
}

/* ----- PRESENTATIONAL - move to separate file ----- */
function drawLineChart(domId, columnValues, xAxisStartTick) {
  var chart = c3.generate({
    bindto: domId,
    data: {
      columns: columnValues
    },
    axis: {
      x: {
        tick: {
          format: function (x) { return x + xAxisStartTick; }
        }
      },
      y: {
        label: { // ADD
          text: 'Population',
          position: 'outer-middle'
        }
      }
    },
    point: {
        show: false
    },
    zoom: {
        enabled: true
    },
    tooltip: {
        grouped: true // Default true
    }
  });
}

/* ----- FORM SUBMISSION - move to separate file ----- */
$("#age-chart-form").on("submit", function() {
  let year = $('#age-chart-year').val();
  let country = $('#age-chart-country').val();
  getPopulationByYearAndCountry(year, country)
    .then(populationData => drawLineChart('#age-chart', populationData, 0))
    .catch(catchErr);
  return false;
});

$("#year-chart-form").on("submit", function() {
  console.log('submitted');
  let age = $('#year-chart-age').val();
  let country = $('#year-chart-country').val();
  getPopulationByAgeGroupAndCountry(age, country)
    .then(logAndContinue)
    .then(populationData => drawLineChart('#year-chart', populationData, 1950))
    .catch(catchErr);
  return false;
});
