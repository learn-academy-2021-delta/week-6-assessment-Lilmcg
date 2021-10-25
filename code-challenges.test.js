// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Create a function personCap that takes in an array
// Iterate over each object key:value pair using map
// Split into an array and map over that new newArray
// Locate character  at index 0 and make it uppercase
// Substring of the word needs to be joined with capitalized character
  // Return string interpolation to create the sentence

describe ("personCap", () => {
  test("given an array of objects return an array with a sentence about each person with their name capitalized", () => {
    expect(personCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Ran test. Test failed. Error: personCap is not defined.

// b) Create the function that makes the test pass.

const personCap = (array) => {
  return array.map(value => {
    let newString = (value.name).toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
    return newString + " " + `is ${value.occupation}.`
  })
}
// console.log(personCap(people))

// Ran test again. Test passed!

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// Create function onlyNumbers that takes in an array
// Create an empty array called divideThree
// Create a newArray and filter through array looking for only a typeof value that is a number
// Loop through new array and modulo % 3 each index and push that number into empty array divideThree
  // Return the new divideThree array

describe ("onlyNumbers", () => {
  test("given a mixed array return an array of only the remainders of the number when divided by 3", () => {
    expect(onlyNumbers(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(onlyNumbers(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// Ran test. Test failed. Error message: onlyNumbers is not defined.

// b) Create the function that makes the test pass.

const onlyNumbers = (array) => {
  let divideThree=[]
  let newArray= array.filter(value=>typeof(value)==="number")
   for(let i=0; i<newArray.length; i++){
    let num = newArray[i] % 3
      divideThree.push(num)
  } return divideThree
}

// console.log(onlyNumbers(hodgepodge1))
// console.log(onlyNumbers(hodgepodge2))

// Ran Test again. Test passed!

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// Create a function sumofCubes that takes in an newArray
// Create a holding place/anchor sumNum for the future sum of numbers
// Loop through the array and cube each number at each index
// Add the cubed numbers to the anchor sumNum
  // Return the sumNum

describe ("sumOfCubes", () => {
  test("given an array of numbers return the sum of the numbers cubed", () => {
    expect(sumOfCubes(cubeAndSum1)).toEqual(99)
    expect(sumOfCubes(cubeAndSum2)).toEqual(1125)
  })
})

// Ran test. Test failed. Error: sumOfCubes is not defined.

// b) Create the function that makes the test pass.

const sumOfCubes = (array) => {
  let sumNum = 0
  for(let i = 0; i <array.length; i++) {
    array[i]=array[i]**3
    sumNum+=array[i]
  }
  return sumNum
}

// console.log(sumOfCubes(cubeAndSum1))
// console.log(sumOfCubes(cubeAndSum2))

// Ran test again. Test passed!
