

const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/app2XuYjq81zafdJb/Raye's%20collection";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

//  DOM REFERENCES
const photographContainerElement = document.querySelector("#photograph-container");
const backgroundContainerElement = document.querySelector("#background-container");
const numbersContainerElement = document.querySelector("#timeline");

const buttons = document.querySelectorAll("buttons")
const photographSelectAll = document.querySelectorAll("imageElement")



// FUNCTIONS
const handleEvents = (event) => {
    /* ON EACH BUTTON, REMOVE ALL SELECTED CLASSES
    for (let index = 0; index < records.length; index++) {
        records[index].classList.remove('selected')
    }  */
    // TURN BACK ON BUTTON CORRESPONDING TO BUTTON PRESSED 
    const buttonValue = event.target.innerHTML
    photographSelectAll[buttonValue].classList.add('selected')
}


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
        // Create Number Buttons
        const numberElement = document.createElement('button')
        numberElement.classList.add('numbers')
        numberElement.innerHTML = numbers;
        // Add Number Element to the Container Element
        numbersContainerElement.appendChild(numberElement)
        /* Create Background Element
        const backgroundElement = document.createElement('img')
        backgroundElement.classList.add('background')
        backgroundElement.setAttribute('src', attachmentUrl)*/
        // Create Image Element
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', attachmentUrl)
        // Add Image Element to the Container Element
        photographContainerElement.appendChild(imageElement)
        /*backgroundContainerElement.appendChild(backgroundElement)*/

// ADD BUTTON
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', handleEvents)
        buttons[index].addEventListener('mouseover', handleEvents)
}
}
})
