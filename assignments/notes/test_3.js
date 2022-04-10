
// VARIABLES
const users = [{
    name: "Kayne Laing", 
    authenticated: true,
    credit: 1043
}, {
    name: "Percy Hurley", 
    authenticated: true,
    credit: -123
}, {
    name: "Bethany Benton", 
    authenticated: false,
    credit: 145
}, 
{
    name: "Hailie Rooney", 
    authenticated: false,
    credit: 14
},
{
    name: "Lowri Currie", 
    authenticated: true,
    credit: 93723
},]

// DOM REFERENCES
const usersContainerElement = document.querySelector('#users')
const showCreditAsDollarsButtonElement = document.querySelector('#creditAsDollars')
const authenticatedButtonElement = document.querySelector('#authenticated')
const sortAscendingButtonElement = document.querySelector('#sort-ascending')
const sortDescendingButtonElement = document.querySelector('#sort-descending')

// FUNCTIONS

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}

const addUsers = (usersArray) => {
    for (let index = 0; index < usersArray.length; index++) {
        // Create User Container
        const userContainerElement = document.createElement('div')
        userContainerElement.classList.add('user')
        // Create Name Element
        const nameElement = document.createElement('p')
        nameElement.innerHTML = 'Name:' + usersArray[index].name
        // Create Authenticated Status Element
        const authenticatedElement = document.createElement('p')
        authenticatedElement.innerHTML = 'Authenticated:' + usersArray[index].authenticated
        // Create Credit Element
        const creditElement = document.createElement('p')
        creditElement.innerHTML = 'Credit: ' + usersArray[index].credit
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(authenticatedElement)
        userContainerElement.appendChild(creditElement)
        usersContainerElement.appendChild(userContainerElement)
    }
}



// MAP
const usersWithCreditAsDollars = users.map((user) => {
    const newUser = {
        name: user.name,
        authenticated: user.authenticated,
        credit: "$" + user.credit / 100
    }
    // what returns here is what you get
    return newUser
})

// FILTER
const authenticatedUsers = users.filter((user) => {
    return user.authenticated
})

// SORT (two users), return three values (1, 0, -1)
const usersSortedByCredit = users.sort((userA, userB) => {
    if(userA.credit > userB.credit) {
        return 1
    }

    if(userA.credit < userB.credit) {
        return -1
    }

    if(userA.credit === userB.credit) {
        return 0
    }

})

const usersSortedByNameAscending = users.sort((userA, userB) => {
    if(userA.name > userB.name) {
        return 1
    }

    if(userA.name < userB.name) {
        return -1
    }

    if(userA.name === userB.name) {
        return 0
    }
})

// slice takes a part of array
const copyOfUsersSortedByNameAscending = usersSortedByNameAscending.slice()
const usersSortedByNameDescending = copyOfUsersSortedByNameAscending.reverse()


// APPLICATION CODE

addUsers (users)

// BUTTONS
showCreditAsDollarsButtonElement.addEventListener('click', () => {
    //remove everything first
    removeUsers ()
    addUsers(usersWithCreditAsDollars)
    
})

authenticatedButtonElement.addEventListener('click', () => {
    //remove everything first
    removeUsers ()
    addUsers(authenticatedUsers)
    
})

sortAscendingButtonElement.addEventListener('click', () => {
    //remove everything first
    removeUsers ()
    addUsers(usersSortedByNameAscending)
    
})

sortDescendingButtonElement.addEventListener('click', () => {
    //remove everything first
    removeUsers ()
    addUsers(usersSortedByNameDescending)
    
})
