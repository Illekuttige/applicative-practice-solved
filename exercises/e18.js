/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let allTheYears = data.asteroids.map(asteroidYear => asteroidYear.discoveryYear)
  
  let yearCount = allTheYears.reduce((acc, year) => {
    if (acc[year]) {
      acc[year] += 1
    } else {
      acc[year] = 1
    }
    return acc
  }, {})

let maxCount = 0
let yearWithHighestCount = null

for (let year in yearCount) {

  if(yearCount[year] > maxCount) {
    maxCount = yearCount[year]
    yearWithHighestCount = parseInt(year)
  }
}

return yearWithHighestCount

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
