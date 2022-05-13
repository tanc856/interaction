



// FUNCTION
document.getElementById("colored-element").style.color = "magenta";

 
const childELement = document.createElement("p");
   let text = document.createTextNode("This is the appendChild element added by Javascript");
   childELement.appendChild(text);
   const parentElement = document.getElementById("parent-element");
   parentElement.appendChild(childELement);

// FOR LOOP

const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"]

for (let index = 0; index < forLoopArray.length; index++) {
    console.log (forLoopArray)
}


// BUTTON

const buttonElement = document.getElementById("event-listener-button");

buttonElement.addEventListener("click", () => {
	console.log("Clicked!");
});

