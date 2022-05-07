
const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appEAXdHJcRuKa63R/ESPRESSO";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;


// DOM references
const urlSubmissionElement = document.querySelector('#link')
const greetingElement = document.querySelector('#greeting')
const urlSubmissionForm = document.querySelector("#submission")
const urlSubmissionInput = document.querySelector("#submission input")

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

        // Create Url response
        const urlResponseElement = document.createElement('p')
        if (index >= 0) {
            urlResponseElement.classList.add('submitedLink')
            urlResponseElement.setAttribute("src", urlLink);
            urlResponseElement.innerHTML = urlLink; 
        }
        
        // Add each Element to the Container Element
        urlSubmissionElement.appendChild(urlResponseElement) 
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
