
const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appyCplnJrLOhtyPB/Table%201";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;


// DOM references
const nameSubmissionElement = document.querySelector('#name')
const urlSubmissionElement = document.querySelector('#linkhere')


// APPLICATION
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})


// FOR LOOP 
jsonPromise.then((data) => {
    const records = data.records 
    console.log (records)
    for (let index = 0; index < records.length; index++) {
        const urlLink = records[index].fields.URL
        // Create Url Response
        const urlResponseElement = document.createElement('a')
        if (index >= 0) {
            urlResponseElement.classList.add('submitedLink')
            urlResponseElement.setAttribute("href", urlLink);
            urlResponseElement.innerHTML = urlLink; 
        }
       
        // Add each Element to the Container Element
        urlSubmissionElement.appendChild(urlResponseElement)
    }
})


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
