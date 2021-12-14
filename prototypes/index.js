const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    const orangeKitties = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name)

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = orangeKitties;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of objects containing information about kitties
      //filter through kitties looking for kitty.color === 'orange'
      //map over array of kitties and return an array of just their names
    //I need to return an array of only the names of kitties that are orange
  },

  sortByAge() {
    // Sort the kitties by their age
    const sortByAge = kitties.sort((a, b) => b.age - a.age)
    const result = sortByAge;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of objects containing kitty data
      //sort the kitties array using dot notation to access age
    //I need to return an array of kitty objects in order of descending age
  },

  growUp() {
    const sortedKitties = kitties.sort((a,b) => b.age - a.age)

    const olderKitties = sortedKitties.map(kitty => {
      const {age} = kitty
      const newAge = age + 2
      return {...kitty, age: newAge}
    })
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = olderKitties;
    return result;

    //I am starting with an array of objects containing kitty data
      //sort the kitties in descending order
      //map over the kitties and reassign the age
    //I need to return an array of kitties sorted in descending order by age who have all aged by 2 years
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const personsClubs = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = []
        }
        acc[member].push(club.club)
      })
      return { ...acc }
    }, {})

    const result = personsClubs;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of club objects which contain nested arrays listing members
      //create an object and iterate over all members arrays to create keys (if that key doesn't already exist)
      //for each person, iterate over each club and check to see if they are in that members array. if yes, add that club to their value array
    //I need to return ONE OBJECT whose keys are the names of the people and whose values are an array of the clubs they are in
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    //i'm starting with an array of objects
      //map over mods array
      //assign variable for current mod
      //assign variable for ratio
      //return object containing these as a key value pair
    //i need to return an array of objects with the key of mod.mod and value of calculation of mod.students/mod.instructors

    const studentInstructorRatio = mods.map(currentMod => {
      const mod = currentMod.mod
      const ratio = currentMod.students / currentMod.instructors
      return { mod: mod, studentsPerInstructor: ratio }
    })

    const result = studentInstructorRatio;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const cakeStock = cakes.map(cake => {
      return { flavor: cake.cakeFlavor, inStock: cake.inStock }
    })

    const result = cakeStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of objects each containing cake data with nested arrays for toppings
      //map over the cakes array and for each iteration,
        //return an object with flavor and stock
    //I need to return an array of objects that include just hte flavor of the cake and how much of that cake is in stock (same number of elements in the array as the original array--map)
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const inStock = []

    cakes.forEach(cake => {
      if (cake.inStock) {
        inStock.push(cake)
      }
    })

    const result = inStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of cake objects
      //not map, because array will not be same length
      //create an empty array
      //iterate over cakes array and forEach cake that is in stock, push it into the new array
    //I need to return an array of only the cakes that are in stock
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const total = cakes.reduce((acc, cake) => {
      return acc + cake.inStock
    }, 0)

    const result = total;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of cake objects which contain a key, inStock
      //Since I am iterating over each cake and adding to a running total, I might use reduce
      //start acc at 0 and add cake.inStock to it
      //return the acc
    //I need to return a number for the total amount of cakes in stock
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    let uniqueToppings = []

    cakes.forEach(cake => {
      cake.toppings.forEach(topping => {
        if (!uniqueToppings.includes(topping)) {
          uniqueToppings.push(topping)
        }
      })
    })

    const result = uniqueToppings;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of cake objects with a key for toppings which is assigned to an array of strings
      //could use [... new Set(arrayName)], but this is not well optimized since it would create a whole extra dataset
      //create an empty array
      //iterate over each cake object (forEach)
        //for each iteration, iterate over the toppings array
          //for each iteration over the toppings array, if the currentTopping is not in the new array, push it
    //I need to return one array of all unique toppings
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const list = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 0
        }
        acc[topping]++
      })
      return acc
    },{})

    const result = list;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of cake objects
      //since i need to create an object and count, i'll use reduce
        //for each cake, also iterate over each topping
          //for each iteration, if the key does not already exist, create it and start value at 0
          //now that key definitely exists, add 1 to the value (acc.key++)
    //I need to return an OBJECT with keys for each topping with values for the amount of each topping
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const feClasses = []

    classrooms.forEach(classroom => {
      if (classroom.program === 'FE') {
        feClasses.push(classroom)
      }
    })

    const result = feClasses;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of classroom objects
      //creat an empty array
      //forEach classroom, puth it into the new array IF classroom.program === 'FE'
    //i need to return an array of just the front end classrooms (not an array the same length as the classrooms array i'm starting with)
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

   const capacities = classrooms.reduce((acc, classroom) => {
     const capacityKey = `${classroom.program.toLowerCase()}Capacity`

      if (!acc[capacityKey]) {
        acc[capacityKey] = 0
      }
      acc[capacityKey] = acc[capacityKey] + classroom.capacity
      return acc
   }, {})

    const result = capacities;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of classroom objects
      //since i am creating an object and counting, i'll use reduce
        //i would like to make it dynamic to new programs, so if the program doesn't exist, create the key `${program.toLowerCase}Capacity`
        //if the key doesn't exist, create it ^ and start the counter at 0
        //now that the key definitely exists, add classroom.capacity to it
    //i need to return one object with the keys 'feCapacity' and 'beCapacity' assigned to the total capacity for each program
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const sortedCapacity = classrooms.sort((a,b) => a.capacity - b.capacity)

    const result = sortedCapacity;
    return result;

    // Annotation:
    // Write your annotation here as a comment
      //sort by capcity, so need to use dot notation to access this key value
    //i am starting with an array of classroom objects
    //I need to return an array of classrooms sorted by capacity, least to greatest (same length as original array)
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    let friendlyBooks = []
    books.forEach(book => {
      if (!book.genre.includes("Horror") && !book.genre.includes("True Crime")) {
        friendlyBooks = [...friendlyBooks, book.title]
      }
    })

    const result = friendlyBooks;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of book objects
      //create an array
      //for each book, add the title to the array IF the genre is not horror or true crime
    //I need to return an array of book titles that are not horror or true crime

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let newBooks = []
    books.forEach(book => {
      if (book.published > 1989) {
        const bookAndYear = { title: book.title, year: book.published }
        newBooks = [...newBooks, bookAndYear]
      }
    })

    const result = newBooks;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of book objects
      //create an empty array
      //forEach book in which book.published > 1989, create an object containing the title and year published and add it to the array
    //i need to return an array of book objects containing title and year published that were published in the 90s and 00s
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const avgTemps = weather.map(dataPoint => {
      const avg = (dataPoint.temperature.high + dataPoint.temperature.low) / 2
      return avg
    })

    const result = avgTemps;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of objects containing weather data for different cities
      //map over weather
      //for each iteration, calculate the average temperature by adding the high and low temp and dividing by 2. return the number
    //I need to return an array of all the average temperatures (of high and low for each object)
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    let sunnySpots = []
    weather.forEach(dataPoint => {
      if (dataPoint.type === 'sunny' || dataPoint.type === 'mostly sunny') {
        const sentence = `${dataPoint.location} is ${dataPoint.type}.`
        sunnySpots = [...sunnySpots, sentence]
      }
    })

    const result = sunnySpots;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of objects containing weather data for different cities
      //create an array
      //forEach dataPoint, if the type is 'sunny' or 'mostly sunny', use interpolation to write a sentence describing the weather, including the location (use some dot notation)
      //add this string to the array

      //could also filter by type and then map over to create strings, but this is not well optimized since it would involve iterating over 2 arrays instead of 1
    //i need to return  an array of sentences of the locations that are sunny and mostly sunny

  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const highToLowHumidity = weather.sort((a,b) => b.humidity - a.humidity)
    const highestHumidity = highToLowHumidity[0]

    const result = highestHumidity;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of objects containing weather data for different cities
      //sort the data from highest to lowest humidity
      //return the datapoint at index 0
    //I need to return the location with the highest humidity

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const visited = nationalParks.reduce((acc, park) => {
      park.visited
        ? acc.parksVisited = [...acc.parksVisited, park.name]
        : acc.parksToVisit = [...acc.parksToVisit, park.name]
        return acc
    }, { parksToVisit: [], parksVisited: [] })

    const result = visited;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of park objects with nested activities arrays
      //since i need to create an object and add to the values of its keys as i iterate over nationalParks, I'll use reduce
      //start with object accumulator
      //create 2 keys assigned to empty arrays
      //with each iteration, check whether visited is true or false
      //use spread operator to add the park.name to the array it belongs in
    //i need to return an OBJECT containing the names of which parks i need to visit and ones visited already
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const statesParks = nationalParks.map(park => {
      const state = park.location
      const nationalPark = park.name

      return { [state]: nationalPark }
    })


    const result = statesParks;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of park objects with nested activities arrays
      //map over nationalParks and for each iteration
        //store state name in variable
        //store park name in variable
        //return an object
      //return the array of objects
    //i need to return an array of objects where the key is the state and the value is its national park
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const activities = []

    nationalParks.forEach(park => {
      park.activities.forEach(activity => {
        if (!activities.includes(activity)) {
          activities.push(activity)
        }
      })
    })

    const result = activities;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of park objects with nested activities arrays
      //could create an array of all the acitivities arrays and use new Set to remove duplicates, but this creates an additional dataset, so i want a better optimized solution

      //create an array for all the activities
      //will iterate over each park (forEach) and on each iteration
        //iterate over each activity (forEach) and if that activity is not in the array, add it
      //return the activities array
    //i need to return an array of all activities without duplicates
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    beerCount = 0

    breweries.forEach(brewery => {
      beerCount = beerCount + brewery.beers.length
    })

    const result = beerCount;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of brewery objects which have nested arrays of beer objects
      //i need to add the lengths of each beer array
      //iterate over each brewery and add the beer array length to a count
    //i need to return the total beer count of all bears for every brewery
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const breweryBeerCount = breweries.map(brewery => {
      return { name: brewery.name, beerCount: brewery.beers.length }
    })

    const result = breweryBeerCount;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of brewery objects which have nested arrays of beer objects
      //map over breweries and on each iteration
        //create an object with the brewery name and beer count (using brewery.beers.length)
    //i need to return an array of objects where each object has the name of a brewery and the brewery's beer count
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let highestAbvBeer = { abv: 0 }

    breweries.forEach(brewery => {
      brewery.beers.forEach(beer => {
        if (beer.abv > highestAbvBeer.abv) {
          highestAbvBeer = beer
        }
      })
    })

    const result = highestAbvBeer;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of brewery objects which have nested arrays of beer objects
      //create variable for hightestABV and assign to an object with a key abv assigned to 0
      //forEach brewery
        //forEach beer
          //if beer.abv > current highestABV, reassign hightestABV
    //i need to return the beer which has the highest ABV of all beers
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const studentsNumbers = instructors.map(instructor => {
      const instructorName = instructor.name
      const findCohort = cohorts.find(cohort => cohort.module === instructor.module)
      const numStudents = findCohort.studentCount

      return { name: instructorName, studentCount: numStudents }
    })

    const result = studentsNumbers
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of instructor objects AND an array of cohort objects
      //map over instructors array and on each iteration
        //create variable for instructor name
        //create variable to access the student count using module information
        //return object with information
    //i need to return an array of instructor objects with the instructor name and the count of students in their module
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    const studentsInstructorRatio = cohorts.reduce((acc, cohort) => {
      const cohortName = `cohort${cohort.cohort}`
      const numInstructors = instructors.filter(instructor => instructor.module === cohort.module).length
      const numStudents = cohort.studentCount
      const ratio = numStudents / numInstructors
      acc[cohortName] = ratio
      return acc
    }, {})

    const result = studentsInstructorRatio;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an array of instructor objects AND an array of cohort objects
      //use reduce to create an object, iterating over cohorts array
      //for each cohort,
        //create key of that cohort name
        //calculate students per teacher
        //assign key with value to acc
    //i need to return an OBJECT of how many students per teacher there are in each cohort
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }



    const instructorModules = instructors.reduce((acc, instructor) => {
      let modules = []

      instructor.teaches.forEach(topic => {
        cohorts.forEach(cohort => {
          if (cohort.curriculum.includes(topic) && !modules.includes(cohort.module)) {
            modules = [...modules, cohort.module]
          }
        })
      })

      acc[instructor.name] = modules.sort((a,b) => a - b)
      return acc
    }, {})

    const result = instructorModules;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //ended up throwing this out in favor of reduce->
    //i am starting with an array of instructor objects AND an array of cohort objects
      //create an empty object
      //for each instructor,
        //iterate over teaches and for each topic, filter cohorts for curriculum includes topic and return the module
        //chain on a map to return only the module
        //assign key and value of topics array to object
    //i need to return an OBJECT where each key is an instructor name and each value is an array of the modules they can teach based on their skills
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const topicInstructors = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(topic => {
        if (!acc[topic]) {
          const getInstructors = instructors.filter(instructor => instructor.teaches.includes(topic))
          const instructorNames = getInstructors.map(instructor => instructor.name)
          acc[topic] = instructorNames
        }
      })
      return acc
    }, {})

    const result = topicInstructors
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //strayed away from pseudocode again--be mindful next time
    //i am starting with an array of instructor objects AND an array of cohort objects
      //use reduce to create an object
      //iterate over cohorts and for each cohort.curriculum, if that topic is not a key, make it one and assign it to an empty array
    //i need to return an OBJECT where each key is a curriculum topic and each value is an array of instructors who teaches that topic
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const bossNames = Object.values(bosses).map(boss => {
      return boss.name
    })
    const bossTotalLoyalty = bossNames.map(boss => {
      const totalLoyalty = sidekicks.reduce((acc, sidekick) => {
        if(sidekick.boss === boss) {
          acc += sidekick.loyaltyToBoss
        }
        return acc
      }, 0)
      return { bossName: boss, sidekickLoyalty: totalLoyalty }
    })

    const result = bossTotalLoyalty;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an OBJECT of bosses in which each boss key is assigned to an object AND an ARRAY of sidekick objects
      //object.keys on bosses to get an array of bosses
      //map over array of bosses and on each iteration
        //iterate over sidekicks with reduce to get sum of loyaltyToBos
        //return object containing bossName and sidekickLoyalty data
    //I need to return an ARRAY of objects that each have the boss's name and the sum loyalty of their sidekicks
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const allConstellations = Object.values(constellations)

    const constellationStars = allConstellations.reduce((acc, constellation) => {
      return [...acc, ...constellation.stars]
    }, [])

    let constellationStarsData = []

    stars.forEach(star => {
      if (constellationStars.includes(star.name)) {
        constellationStarsData.push(star)
      }
    })

    const result = constellationStarsData;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an OBJECT containing keys for constellations which are assigned to OBJECTS containing constellation information AND an ARRAY of star objects
      //create an array containing all of the stars in each constellation stars array
      //iterate over stars array and for each star.name, if it is in the master array of stars that are in constellations, add the whole star object to an array to return at the end of the function
    //I need to return an ARRAY of all of the stars that appear in any of the constellations
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const starColors = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = []
      }
      acc[star.color] = [...acc[star.color], star]
      return acc
    }, {})

    const result = starColors;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an OBJECT containing keys for constellations which are assigned to OBJECTS containing constellation information AND an ARRAY of star objects
      //may use reduce to create an object
      //iterate over stars array to create keys (if it does not already exist) for star.color assigned to empty arrays
      //then add the star object to the array assigned to the color
    //I need to return an OBJECT with the keys of the different colors of the stars whose values are arrays containing star objects that match

  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Lyra",
    //    "Auriga",
    //    "Orion",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    let brightestConstellations = []
    stars.forEach(star => {
      if(star.constellation.length) {
        brightestConstellations = [...brightestConstellations, star.constellation]
      }
    })

    const result = brightestConstellations;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //i am starting with an ARRAY of star objects and a constellation OBJECT in which each key is assigned to an object
      //need to iterate over stars and return array of constellation names
      //only return constellation name if there is one
    //I need to return an array of the names of the constellations (star.constellation)
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //I am starting with an array of character objects AND a weapons object with keys for weapons assigned to objects containing info for damage and range as values
      //want to iterate over weapons object keys, which means I need to create an array of weapon names (Object.key?)
      //iterate over weapons with a reduce and start acc at 0
        //for each iteration, access weapons object at weapons[currentWeapon].damage and add to acc
        //return acc
    //I need to return the sum of hte amount of DAMAGE for all of the weapons
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
