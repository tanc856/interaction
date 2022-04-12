

const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/app2XuYjq81zafdJb/Raye's%20collection";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

//  DOM REFERENCES
const photographContainerElement = document.querySelector("#photograph");
const backgroundContainerElement = document.querySelector("#background");


const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})

jsonPromise.then((data) => {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const attachmentUrl = records[index].fields.Attachments[0].url
        // Create Background Element
        const backgroundElement = document.createElement('img')
        backgroundElement.classList.add('background')
        backgroundElement.setAttribute('src', attachmentUrl)
        // Create Image Element
        const imageElement = document.createElement('img')
        imageElement.classList.add('attachment')
        imageElement.setAttribute('src', attachmentUrl)
        // Add Image Element to the Container Element
        photographContainerElement.appendChild(imageElement)
        backgroundContainerElement.appendChild(backgroundElement)
    }
})