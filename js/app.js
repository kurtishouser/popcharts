const countries = [
  "Afghanistan",
  // "AFRICA",
  "Albania",
  "Algeria",
  "Angola",
  "Antigua and Barbuda",
  "Arab Rep of Egypt",
  "Argentina",
  "Armenia",
  "Aruba",
  // "ASIA",
  "Australia",
  // "Australia/New Zealand",
  "Austria",
  "Azerbaijan",
  // "The Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cote-d-Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  // "Caribbean",
  "Central African Republic",
  // "Central America",
  // "Central Asia",
  "Chad",
  "Channel Islands",
  "Chile",
  "China",
  "Hong Kong SAR-China",
  "Macao SAR China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Dem Peoples Rep of Korea",
  "Dem Rep of Congo",
  "Denmark",
  "Djibouti",
  "Dominican Republic",
  // "Eastern Africa",
  // "Eastern Asia",
  // "Eastern Europe",
  "Ecuador",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  // "EUROPE",
  "Federated States of Micronesia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "FYR Macedonia",
  "Gabon",
  "The Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Islamic Republic of Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyz Republic",
  "Lao PDR",
  // "LATIN AMERICA AND THE CARIBBEAN",
  "Latvia",
  // "Least developed countries",
  "Lebanon",
  "Lesotho",
  // "Less developed regions",
  // "Less developed regions, excluding China",
  // "Less developed regions, excluding least developed countries",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  // "Melanesia",
  "Mexico",
  // "Micronesia",
  // "Middle Africa",
  "Moldova",
  "Mongolia",
  "Montenegro",
  // "More developed regions",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "The Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  // "Northern Africa",
  // "NORTHERN AMERICA",
  // "Northern Europe",
  "Norway",
  // "OCEANIA",
  "Oman",
  // "Other non-specified areas",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  // "Polynesia",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "RB-de-Venezuela",
  "Rep of Korea",
  "Rep of Yemen",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "St-Lucia",
  "St-Vincent and the Grenadines",
  "Samoa",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovak Republic",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  // "South America",
  "South Sudan",
  // "South-Central Asia",
  // "South-Eastern Asia",
  // "Southern Africa",
  // "Southern Asia",
  // "Southern Europe",
  "Spain",
  "Sri Lanka",
  "West Bank and Gaza",
  // "Sub-Saharan Africa",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Rep",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "US Virgin Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vietnam",
  // "Western Africa",
  // "Western Asia",
  // "Western Europe",
  // "Western Sahara",
  // "World",
  "Zambia",
  "Zimbabwe"
];

const regions = [
  "China",
  "India",
  "AFRICA",
  "ASIA",
  "Australia/New Zealand",
  "The Bahamas",
  "Caribbean",
  "Central America",
  "Central Asia",
  "Eastern Africa",
  "Eastern Asia",
  "Eastern Europe",
  "EUROPE",
  "LATIN AMERICA AND THE CARIBBEAN",
  "Least developed countries",
  "Less developed regions",
  "Less developed regions, excluding China",
  "Less developed regions, excluding least developed countries",
  "Melanesia",
  "Micronesia",
  "Middle Africa",
  "More developed regions",
  "Northern Africa",
  "NORTHERN AMERICA",
  "Northern Europe",
  "OCEANIA",
  "Other non-specified areas",
  "Polynesia",
  "South America",
  "South-Central Asia",
  "South-Eastern Asia",
  "Southern Africa",
  "Southern Asia",
  "Southern Europe",
  "Sub-Saharan Africa",
  "Western Africa",
  "Western Asia",
  "Western Europe",
  "Western Sahara",
  "World",
];

/* --- uncomment these to start with populated graphs --- */
// getPopulationByYearAndCountry(2010, 'United States')
//   .then(populationData => drawLineChart('#year-chart', populationData, 0))
//   .catch(catchErr);
//
// getPopulationByAgeGroupAndCountry(25, 'United States')
//   .then(populationData => drawLineChart('#age-chart', populationData, 1950))
//   .catch(catchErr);
//
// getPopulationByAgeGroupAndYear(30, 2015)
//   .then(populationData => drawCountryBarChart('#country-chart', populationData))
//   .catch(catchErr);
//
// getTotalLifeExpectancyAllCountries('male', 'United States', '2000-01-01')
//   .then(totalLifeExpectancy => drawLifeExpectancyBarChart('#life-expectancy-chart', totalLifeExpectancy))


// Retrieve population tables for a given year and country
function getPopulationByYearAndCountry(year, country) {
  let url = `http://api.population.io:80/1.0/population/${year}/${country}/`;
  // let data = getJsonFromFetch(url);
  return getJsonFromFetch(url)
    .then(populationTable => {
        let columnValues = [];
        let males = ['M - ' + year + ' - ' + country];
        let females = ['F - ' + year + ' - ' + country];
        let total = ['Total - ' + year + ' - ' + country];

        populationTable.forEach(item => {
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
        let males = ['M - ' +  age + ' yrs - ' + country];
        let females = ['F - ' +  age + ' yrs - ' + country];
        let total = ['Total - ' +  age + ' yrs - ' + country];

        populationTable.filter(item => item.year <= 2025) // limit dataset, predicts thru 2100 otherwise!
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

// Retrieve population table for all countries and a specific age group in the given year
function getPopulationByAgeGroupAndYear(age, year) {
  let url = `http://api.population.io/1.0/population/${year}/aged/${age}/`;
  return getJsonFromFetch(url)
    // .then(populationTable => {
    //     let columnValues = [];
    //     let males = ['M - ' +  age + ' yrs - ' + year];
    //     let females = ['F - ' +  age + ' yrs - ' + year];
    //     let total = ['Total - ' +  age + ' yrs - ' + year];
    //
    //     populationTable.forEach(item => {
    //         males.push(item.males);
    //         females.push(item.females);
    //         total.push(item.total);
    //       });
    //
    //     columnValues.push(males);
    //     columnValues.push(females);
    //     columnValues.push(total);
    //     return columnValues;
    // })
}

// Calculate total life expectancy - all countries
function getTotalLifeExpectancyAllCountries(sex, country, dob) {
  let url = `http://api.population.io/1.0/life-expectancy/total/`;
  let lifeExpectancyRequests = countries.map(country => fetch(`${url}${sex}/${country}/${dob}/`))
  return Promise.all(lifeExpectancyRequests)
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

// NOT USED (yet) - Calculate total life expectancy - individual country
function getTotalLifeExpectancyIndividual(sex, country, dob) {
  let url = `http://api.population.io/1.0/life-expectancy/total/${sex}/${country}/${dob}/`
  return getJsonFromFetch(url)
    .then(json => json.total_life_expectancy);
}

function getJsonFromFetch(url) {
  // console.log('Requesting', url);
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
function drawLineChart(domId, chartData, xAxisStartTick, xAxisLabel) {
  var chart = c3.generate({
    bindto: domId,
    data: {
      columns: chartData,
      type: 'line'
    },
    axis: {
      x: {
        label: {
          text: xAxisLabel,
          position: 'outer-middle'
        },
        tick: {
          format: function (x) { return x + xAxisStartTick; },
        }
      },
      y: {
        label: { // ADD
          text: 'Population',
          position: 'inner-right'
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
  // put the data into the correct data format
  let xAxis = ['x'];
  let males = ['Male'];
  let females = ['Female'];
  let total = ['Total'];
  data.forEach(item => {
    xAxis.push(item.country);
    males.push(item.males);
    females.push(item.females);
    total.push(item.total);
  });

  // draw the chart
  chartData = [xAxis, males, females, total];
  var chart = c3.generate({
    bindto: domId,
    size: {
        height: 400
    },
    data: {
      x: 'x',
      columns: chartData,
      type: 'bar'
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 75,
          multiline: false
        },
        height: 130
      }
    },
    zoom: {
      enabled: true
    }
  });

}

function drawLifeExpectancyBarChart(domId, data, country) {
  // convert data to appropriate format for the chart
  let xAxis = ['x'];
  let you = ['You'];
  let lifeExpectancy = ['Life Expectancy'];
  data.forEach(item => {
    xAxis.push(item.country);
    if (item.country === country) {
      you.push(item.total_life_expectancy);
    } else {
      you.push(0);
    }
    lifeExpectancy.push(item.total_life_expectancy);
  });
  chartData = [xAxis, lifeExpectancy, you];

  // draw the chart
  var chart = c3.generate({
    bindto: domId,
    size: {
        height: 400
    },
    data: {
      x: 'x',
      columns: chartData,
      type: 'bar'
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 75,
          multiline: false
        },
        height: 130
      }
    },
    zoom: {
      enabled: true
    }
  });
}


/* ----- FORM SUBMISSION - move to separate file ----- */
$("#age-chart-form").on("submit", function() {
  let year = $('#age-chart-year').val();
  let country = $('#age-chart-country').val();
  getPopulationByYearAndCountry(year, country)
    .then(populationData => drawLineChart('#age-chart', populationData, 0, 'Age'))
    .catch(catchErr);
  return false;
});

$("#year-chart-form").on("submit", function() {
  let age = $('#year-chart-age').val();
  let country = $('#year-chart-country').val();
  getPopulationByAgeGroupAndCountry(age, country)
    .then(populationData => drawLineChart('#year-chart', populationData, 1950, 'Year'))
    .catch(catchErr);
  return false;
});

$("#country-chart-form").on("submit", function() {
  let age = $('#country-chart-age').val();
  let year = $('#country-chart-year').val();
  getPopulationByAgeGroupAndYear(age, year)
    .then(populationData => {
      return populationData.filter(element => !regions.includes(element.country)) // countries only, exclude regions data
    })
    .then(populationData => drawCountryBarChart('#country-chart', populationData, 0, 'Country'))
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
  getTotalLifeExpectancyAllCountries(sex, country, dob)
    .then(totalLifeExpectancy => drawLifeExpectancyBarChart('#life-expectancy-chart', totalLifeExpectancy, country))
    .catch(catchErr);
  return false;
});
