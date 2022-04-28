
// DOM references
const userOutputElement = document.querySelector("#user-output");
const userInputElement = document.querySelector("form#user-input");

// FUNCTION
userInputElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputElement = event.target.querySelector("input");
    event = userInputElement.value;

    const createListElement = document.createElement("li");
    (createListElement.innerHTML = event), userOutputElement.appendChild(createListElement), (userInputElement.value = "");
});
