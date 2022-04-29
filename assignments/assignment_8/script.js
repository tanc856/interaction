
// DOM references
const userOutputElement1 = document.querySelector("#user-output1");
const userInputElement1 = document.querySelector("form#user-input1");
const userOutputElement2 = document.querySelector("#user-output2");
const userInputElement2 = document.querySelector("form#user-input2");
const userOutputElement3 = document.querySelector("#user-output3");
const userInputElement3 = document.querySelector("form#user-input3");

// FUNCTION
userInputElement1.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputElement1 = event.target.querySelector("input");
    event = userInputElement1.value;

    const createListElement = document.createElement("li");
    (createListElement.innerHTML = event), userOutputElement1.appendChild(createListElement), (userInputElement1.value = "");
});

userInputElement2.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputElement2= event.target.querySelector("input");
    event = userInputElement2.value;

    const createListElement = document.createElement("li");
    (createListElement.innerHTML = event), userOutputElement2.appendChild(createListElement), (userInputElement2.value = "");
});

userInputElement3.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputElement3 = event.target.querySelector("input");
    event = userInputElement3.value;

    const createListElement = document.createElement("li");
    (createListElement.innerHTML = event), userOutputElement3.appendChild(createListElement), (userInputElement3.value = "");
});


