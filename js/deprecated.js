// some previous code that's was refactored or no longer used

function totalPopulation(population, valuesLabel) {
  let totalPopulation = population.map(item => item.total);

  totalPopulation.unshift(valuesLabel);

  return totalPopulation;
}

getPopulationByYearAndCountry(2010, 'United States')
  // .then(populationTable => {
  //     let columnValues = [];
  //     let males = [];
  //     let females = [];
  //     let total = [];
  //     populationTable.forEach(item => {
  //       males.push(item.males);
  //       females.push(item.females);
  //       total.push(item.total);
  //     });
  //
  //     males.unshift('Males - 2010 - United States');
  //     females.unshift('Females - 2010 - United States');
  //     total.unshift('Total - 2010 - United States');
  //     columnValues.push(males);
  //     columnValues.push(females);
  //     columnValues.push(total);
  //
  //     return columnValues;
  // })
  .then(populationData => drawLineChart('#chart', populationData, 0))
  .catch(catchErr);

getPopulationByAgeGroupAndCountry(25, 'United States')
  // .then(populationTable => {
  //     let columnValues = [];
  //     let males = [];
  //     let females = [];
  //     let total = [];
  //     populationTable.filter(item => item.year <= 2025) // predicts thru 2100 otherwise
  //       .forEach(item => {
  //         males.push(item.males);
  //         females.push(item.females);
  //         total.push(item.total);
  //       });
  //
  //     males.unshift('Males - 25 yrs - United States');
  //     females.unshift('Females - 25yrs - United States');
  //     total.unshift('Total - 25yrs - United States');
  //     columnValues.push(males);
  //     columnValues.push(females);
  //     columnValues.push(total);
  //     return columnValues;
  // })
  .then(populationData => drawLineChart('#chart2', populationData, 1950))
  .catch(catchErr);
