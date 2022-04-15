// API key
const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of the airtable file
const airtableURL = "https://api.airtable.com/v0/app2XRcw3r6xY9vwu/Recipe%20randomizer";

// URL with API Key Authentication
const authenticatedUrl = airtableURL + "?api_key=" + airtableApiKey;


// DOM references
const textElement = document.querySelector('#text')
const vegetableElement = document.querySelector('#vegetable')
const proteinElement = document.querySelector('#protein')
const carbElement = document.querySelector('#carb')
const mealElement = document.querySelector('#meal')


// FUNCTIONS



// FETCH

fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;
    const meals = words.filter((word) => {
        return word.fields.meal
    })
    const vegetables = words.filter((word) => {
        return word.fields.vegetables
    })
    const proteins = words.filter((word) => {
        return word.fields.protein
    })    
    const carbs = words.filter((word) => {
        return word.fields.carb
    })

    // Set Values onto HTML Elements 
    vegetableElement.innerHTML = vegetables[Math.floor(Math.random()*vegetables.length)].fields.vegetables
    proteinElement.innerHTML = proteins[Math.floor(Math.random()*proteins.length)].fields.protein
    carbElement.innerHTML = carbs[Math.floor(Math.random()*carbs.length)].fields.carb
    mealElement.innerHTML = meals[Math.floor(Math.random()*meals.length)].fields.meal
  }
)




