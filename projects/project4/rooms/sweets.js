

const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appyCplnJrLOhtyPB/Table%201";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;


// DOM references
const nameResponseElement = document.querySelector('#username')
const urlSubmissionElement = document.querySelector('#link')
const greetingElement = document.querySelector('#greeting')



// APPLICATION
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})


// FOR LOOP 
jsonPromise.then((data) => {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const urlLink = records[index].fields.URL
        const userName = records[index].fields.NAME

        // Create Name response
        const  userNameResponseElement = document.createElement('p')
        if (index >= 0) {
             userNameResponseElement.classList.add('submitedName')
             userNameResponseElement.setAttribute("name", userName);
             userNameResponseElement.innerHTML = userName; 
        }

        // Create Url response
        const urlResponseElement = document.createElement('src')
        if (index >= 0) {
            urlResponseElement.classList.add('submitedLink')
            urlResponseElement.setAttribute("src", urlLink);
            urlResponseElement.innerHTML = urlLink; 
        }
        
        // Change Spotify URL to embed URL
        const spotifyNewUrl = urlLink.slice(0,25) + 'embed/' + 'track/' + urlLink.slice(31,54) + 'utm_source=generator'

        const spotifyEmbedIframeElement = document.createElement('iframe')
        spotifyEmbedIframeElement.setAttribute('style', 'border-radius:12px')
        spotifyEmbedIframeElement.setAttribute('src', spotifyNewUrl)
        spotifyEmbedIframeElement.setAttribute('width', '120%')
        spotifyEmbedIframeElement.setAttribute('height', '75')
        spotifyEmbedIframeElement.setAttribute('frameBorder', '0')
        spotifyEmbedIframeElement.setAttribute('allowfullscreen', '')
        spotifyEmbedIframeElement.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture')

        // Add each Element to the Container Element
        userNameResponseElement.appendChild(nameResponseElement)
        urlSubmissionElement.appendChild(spotifyEmbedIframeElement) 
    }
})


// GREETING
const myDate = new Date();
const hrs = myDate.getHours();

let greeting;

if (hrs < 12)
  greeting = 'Good Morning ☀ ';
else if (hrs >= 12 && hrs <= 17)
  greeting = 'Good Afternoon! ';
else if (hrs >= 17 && hrs <= 24)
  greeting = 'Good Evening ☾ ';

document.getElementById('greeting').innerHTML ='<b>' + greeting + '</b>';


// CLOCK
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s ;
    setInterval(startTime, 1000);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
