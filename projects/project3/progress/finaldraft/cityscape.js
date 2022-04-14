

const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/app2XuYjq81zafdJb/Raye's%20collection";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

//  DOM REFERENCES
const photographContainerElement = document.querySelector("#photograph-container");
const buttonsContainerElement = document.querySelector("#timeline");

/*const backgroundContainerElement = document.querySelector("#background-container");*/
/* const buttons = document.querySelectorAll("buttons")*/
/*const photographSelectAll = document.querySelectorAll("imageElement")*/


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
        /* Create Background Element
        const backgroundElement = document.createElement('img')
        backgroundElement.classList.add('background')
        backgroundElement.setAttribute('src', attachmentUrl)*/
        // Create Image Element
        const imageElement = document.createElement('img')
        imageElement.classList.add('selected')
        imageElement.setAttribute('src', attachmentUrl)
        // Add Image Element to the Container Element
        buttonsContainerElement.appendChild(buttonElement)
        photographContainerElement.appendChild(imageElement)
        /*backgroundContainerElement.appendChild(backgroundElement)*/
    }

// FUNCTIONS
const handleEvents = (event) => {
    const buttonValue = event.target.innerHTML
    // ON EACH BUTTON, REMOVE ALL SELECTED CLASSES
    for (let index = 0; index < photographContainerElement.length; index++) {
    photographContainerElement[buttonValue].classList.remove('selected')
}
    /* TURN BACK ON BUTTON CORRESPONDING TO BUTTON PRESSED 
    const buttonValue = event.target.innerHTML
    photographContainerElement[buttonValue].classList.add('selected')
}*/

// ADD BUTTON
    for (let index = 0; index < buttonsContainerElement.length; index++) {
        buttonsContainerElement[index].addEventListener('click', handleEvents)
        buttonsContainerElement[index].addEventListener('mouseover', handleEvents)
}
}
})
