/*onst constantVariable = "cannot be changed"
let dynamicVariable = "can be changed"

const firstName = "Cynthia"
const lastName = "Tan"
const fullName = firstName + " " + lastName

console.log(fullName);


const multiplyByTwo = function(input) {}

const multiplyByTwo = function(numberOne, numberTwo) {}


/* loops */

/*let str ="";

for (let index = 0; index < 10; index++) {
    str = str + index;
}

console. log (str)*/


// VARIABLES
const colorsArray = ["black", "darkgreen", "pink", "grey"]

const newDate = new Date();
const currentDate = {
    // key: 'value' (make key: year, month, date)
    year: newDate.getFullYear (),
    month: newDate.getMonth (),
    day: newDate.getDay (),
    hour: newDate.getMonth (),
    minute: newDate.getDay (),
    second: newDate.getSeconds ()
}

//loop over each keys and value and do something on each time
const steps = [
    currentDate.year,
    currentDate.month,
    currentDate.day,
    currentDate.hour, 
    currentDate.minute,
    currentDate.second
];

// DOM reference
const applicationElement = document.querySelector('div#app')

// FUNCTIONS
const createDivElement = () => {
    return document.createElement('div') //create a div element in html
}

const createParagraphElement = () => {
    return document.createElement('p') //create a paragraph element in html
}

// APPLICATION
for (let index = 0; index < steps.length; index++) {
    //DO SOMETHING TO EACH STEP
    const divElement = createDivElement ()
    const paragraphElement = createParagraphElement () 
    paragraphElement.innerHTML = steps [index]
    const colorIndex = steps[index] % 4;
    const divElementColor = colorsArray [colorIndex] 
    divElement.style.backgroundColor = divElementColor
    divElement.classList.add ("step")
    if (steps [index] % 2 === 0) {
        divElement.style.background = "linear-gradient(" +divElementColor + ", #000000)"
    }
    // appendchild gives argument to the element under the same tree
    applicationElement.appendChild(divElement)
    divElement.appendChild (paragraphElement)
}

//parameter: what is the text inside this html

// notes: what is appendchild? what is loop?





