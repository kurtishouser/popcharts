// Retrieve population tables for a given year and country
function getPopulationByYearAndCountry(year, country) {
  let url = `http://api.population.io:80/1.0/population/${year}/${country}/`;
  return getJsonFromFetch(url);
}

// Retrieve population tables for a specific age group in the given country
function getPopulationByAgeGroupAndCountry(age, country) {
  let url = `http://api.population.io/1.0/population/${country}/${age}/`;
  return getJsonFromFetch(url);
}

// Retrieve population table for all countries and a specific age group in the given year
function getPopulationByAgeGroupAndYear(age, year) {
  let url = `http://api.population.io/1.0/population/${year}/aged/${age}/`;
  return getJsonFromFetch(url);
}

// Calculate total life expectancy - all countries
function getTotalLifeExpectancyAllCountries(sex, country, dob) {
  let url = `http://api.population.io/1.0/life-expectancy/total/`;
  let lifeExpectancyRequests = countries.map(country => fetch(`${url}${sex}/${country}/${dob}/`));
  return Promise.all(lifeExpectancyRequests)
  .then(logAndContinue)
  .then(lifeExpectancyResponses => {
    let lifeExpectancyPromises = lifeExpectancyResponses.map(lifeExpectancyResponse => lifeExpectancyResponse.json()); // array of promises
    return Promise.all(lifeExpectancyPromises)
  })
  .then(data => {
    return data.sort(function(a, b){
      return a.total_life_expectancy - b.total_life_expectancy;
    })
  })
}

function getJsonFromFetch(url) {
  return fetch(url)
    .then(response => response.json());
}

function catchErr(err) {
  throw new Error(err);
}

function logAndContinue(value) {
  console.log(value); // eslint-disable-line
  return value;
}

/* ----- PRESENTATIONAL - move to separate file ----- */
function drawLineChart(domId, chartData, xAxisStartTick, xAxisLabel) {
  c3.generate({
    bindto: domId,
    data: {
      columns: chartData,
      type: 'line'
    },
    axis: {
      x: {
        label: {
          text: xAxisLabel,
          position: 'inner-left'
        },
        tick: {
          format: function (x) { return x + xAxisStartTick; },
        }
      },
      y: {
        label: {
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

function drawCountryBarChart(domId, data) {
  c3.generate({
    bindto: domId,
    size: {
        height: 400
    },
    data: {
      x: 'x',
      columns: data,
      type: 'bar',
      groups: [
        ['Male', 'Female']
      ]
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 75,
          multiline: false
        },
        height: 130
      },
      y: {
        label: {
          text: 'Population',
          position: 'outer-middle'
        }
      }
    },
    zoom: {
      enabled: true,
      rescale: true
    },
  });

}

function drawLifeExpectancyBarChart(domId, data, country) {

  let selectedCountryIndex;
  for (var i = 0; i < data[0].length; i++) {
    if (data[0][i+1] === country) { // country selected by the user
      selectedCountryIndex = i; // set index for changing color of country bar
      break; // no need to go further once it's found
    }
  }

  c3.generate({
    bindto: domId,
    size: {
        height: 400
    },
    data: {
      x: 'x',
      columns: data,
      type: 'bar',
      color : function (color, d) {
          return d.index === selectedCountryIndex ? "#dd0" : color;
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 75,
          multiline: false
        },
        height: 130
      },
      y: {
        label: {
          text: 'Years',
          position: 'inner-top'
        }
      }
    },
    zoom: {
      enabled: true,
      rescale: true
    }
  });
}

function loading(domId) {
  $(domId).append('<img class="ajax-loader" style="width: 50px;" src="images/world.gif">');
}

/* ----- FORM SUBMISSION - move to separate file ----- */
$("#age-chart-form").on("submit", function() {
  let year = $('#age-chart-year').val();
  let country = $('#age-chart-country').val();
  loading('#age-chart');
  getPopulationByYearAndCountry(year, country)
    .then(populationData => {
        let columnValues = [];
        let males = ['M - ' + year + ' - ' + country];
        let females = ['F - ' + year + ' - ' + country];
        let total = ['Total - ' + year + ' - ' + country];

        populationData.forEach(item => {
            males.push(item.males);
            females.push(item.females);
            total.push(item.total);
          });

        columnValues.push(males);
        columnValues.push(females);
        columnValues.push(total);
        return columnValues;
      })
    .then(chartData => drawLineChart('#age-chart', chartData, 0, 'Age'))
    .catch(catchErr);
  return false;
});

$("#year-chart-form").on("submit", function() {
  let age = $('#year-chart-age').val();
  let country = $('#year-chart-country').val();
  loading('#year-chart');
  getPopulationByAgeGroupAndCountry(age, country)
    .then(populationData => {
        let columnValues = [];
        let males = ['M - ' +  age + ' yrs - ' + country];
        let females = ['F - ' +  age + ' yrs - ' + country];
        let total = ['Total - ' +  age + ' yrs - ' + country];

        populationData.filter(item => item.year <= 2025) // limit dataset, predicts thru 2100 otherwise!
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
    .then(chartData => drawLineChart('#year-chart', chartData, 1950, 'Year'))
    .catch(catchErr);
  return false;
});

$("#country-chart-form").on("submit", function() {
  let age = $('#country-chart-age').val();
  let year = $('#country-chart-year').val();
  loading('#country-chart');
  getPopulationByAgeGroupAndYear(age, year)
    .then(populationData => {
      return populationData.filter(element => !regions.includes(element.country)) // countries only, exclude regions data
    })
    .then(chartData => {
      let xAxis = ['x'];
      let males = ['Male'];
      let females = ['Female'];
      chartData.forEach(item => {
        xAxis.push(item.country);
        males.push(item.males);
        females.push(item.females);
      });
      return [xAxis, males, females];
    })
    .then(chartData => drawCountryBarChart('#country-chart', chartData, 0, 'Country'))
    .catch(catchErr);
  return false;
});

$("#life-expectancy-chart-form").on("submit", function() {
  let sex = $('input[name=sex]:checked').val();
  let month = $('#life-expectancy-chart-month').val();
  let day = $('#life-expectancy-chart-day').val();
  let year = $('#life-expectancy-chart-year').val();
  let country = $('#life-expectancy-chart-country').val();
  let dob = year + '-' + month + '-' + day;
  loading('#life-expectancy-chart');
  getTotalLifeExpectancyAllCountries(sex, country, dob)
    .then(data => {
      // generate separate arrays for the chart
      let xAxis = ['x'];
      let lifeExpectancy = ['Life Expectancy'];
      for (let i = 0; i < data.length; i++) {
        xAxis.push(data[i].country);
        lifeExpectancy.push(data[i].total_life_expectancy);
      }
      return [xAxis, lifeExpectancy];
    })
    .then(chartData => drawLifeExpectancyBarChart('#life-expectancy-chart', chartData, country))
    .catch(catchErr);
  return false;
});
