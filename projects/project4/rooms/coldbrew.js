
const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appfB8GXcXz9cTZyA/Table%201";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;


// DOM references
const urlSubmissionElement = document.querySelector('#link')
const greetingElement = document.querySelector('#greeting')
const urlSubmissionForm = document.querySelector(".submission")
const urlSubmissionInput = document.querySelector(".submission #form_url")
const titleSubmissionInput = document.querySelector(".submission #form_title")


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
        const titleSubmission = records[index].fields.TITLE

        // Create Title response
        const titleResponseElement = document.createElement('a')
        if (index >= 0) {
            titleResponseElement.classList.add('submittedTitle')
            titleResponseElement.setAttribute("href", urlLink);
            titleResponseElement.innerHTML = titleSubmission; 
        }

        // Create Url response
        const urlResponseElement = document.createElement('a')
        if (index >= 0) {
            urlResponseElement.classList.add('submittedLink')
            urlResponseElement.setAttribute("href", urlLink);
            urlResponseElement.innerHTML = titleSubmission; 
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

// CONNECT AIRTABLE TO SUBMISSION BUTTON

urlSubmissionForm.addEventListener('submit', (event) => {

  event.preventDefault()
  const urlLink = urlSubmissionInput.value
  const titleSubmit = titleSubmissionInput.value
  // console.log(userValue)
  urlSubmissionInput.value = ""
  titleSubmissionInput.value = ""

  // // Create Title response
   const titleResponseElement = document.createElement('p')

      titleResponseElement.classList.add('submittedTitle')
      titleResponseElement.setAttribute("src", titleSubmit);
      titleResponseElement.innerHTML = titleSubmit; 
  
  // Create Url response
  const urlResponseElement = document.createElement('src')
  
      urlResponseElement.classList.add('submitedLink')
      urlResponseElement.setAttribute("src", urlLink);
      urlResponseElement.innerHTML = urlLink; 
  

    // Submit Chat Message to Airtable Database
    const fetchPostPromise = fetch(authenticatedUrl, {
      method: 'POST', 
      body: JSON.stringify({
          records: [{
              fields: {
                  URL:  urlLink,
                  TITLE: titleSubmit
              }
          }]
      }),
      headers: {
          'Content-Type': 'application/json',
      },
  })
  fetchPostPromise.then((response) => {
      console.log(response)
      return response.json()
  })
  .then((data) => {
      console.log(data)
  })
  .catch((error) => {
      console.log(error)
  })
  // End Submit Chat Message to Airtable Database
})
