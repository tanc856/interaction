
const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/app2XuYjq81zafdJb/Raye's%20collection";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

//  DOM REFERENCES
const photographContainerElement = document.querySelector("#photograph-container");
const backgroundContainerElement = document.querySelector("#background-container");
const buttonsContainerElement = document.querySelector("#timeline");


// APPLICATION
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})

jsonPromise.then((data) => {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const attachmentUrl = records[index].fields.Attachments[0].url
        const numbers = [index]
        // Create Button Element
        const buttonElement = document.createElement('button')
        buttonElement.classList.add('numbers')
        buttonElement.innerHTML = numbers; 
        // Create Image Element
        const imageElement = document.createElement('img')
        imageElement.classList.add('selected')
        imageElement.setAttribute('src', attachmentUrl)
        // Create Background Image Element
        const backgroundElement = document.createElement('img')
        backgroundElement.classList.add('selected')
        backgroundElement.setAttribute('src', attachmentUrl)
        // Add Image Element to the Container Element
        buttonsContainerElement.appendChild(buttonElement)
        photographContainerElement.appendChild(imageElement)
        backgroundContainerElement.appendChild(backgroundElement)
}


// DOM REFERENCES SELECT DYNAMIC CONTENT
const buttons = document.querySelectorAll('button')
const images = document.querySelectorAll('img')


// FUNCTIONS
const handleEvents = (event) => {
    // ON EACH BUTTON, REMOVE ALL SELECTED CLASSES
    for (let index = 0; index < images.length; index++) {
    images[index].classList.remove('selected')
}
    // TURN BACK ON BUTTON CORRESPONDING TO BUTTON PRESSED 
    const buttonValue = event.target.innerHTML
    images[buttonValue].classList.add('selected')
} // Why is it not adding 'selected to the background elements??


// ADD BUTTON
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', handleEvents)
    buttons[index].addEventListener('mouseover', handleEvents)
}
})
