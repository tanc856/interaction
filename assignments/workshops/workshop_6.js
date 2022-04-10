// VARIABLES
const weapons = [{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]

// DOM references
const weaponsContainerElement = document.querySelector('#weapons')
const originalButtonElement = document.querySelector('#original')
const attackWithCritButtonElement = document.querySelector('#attackwithcrit')
const higherAttackValueButtonElement = document.querySelector('#higherattackvalue')
const sortAscendingButtonElement = document.querySelector('#sort-ascending')
const sortDescendingButtonElement = document.querySelector('#sort-descending')


// FUNCTIONS

const removeWeapons = () => {
    weaponsContainerElement.innerHTML = ""
}

const addWeapons  = (weaponsArray) => {
    for (let index = 0; index < weaponsArray.length; index++) {
        // Create Weapons Container
        const weaponContainerElement = document.createElement('div')
        weaponContainerElement.classList.add('weapon')
        // Create Name Element
        const nameElement = document.createElement('p')
        nameElement.innerHTML = 'Name: ' + weaponsArray[index].name
        // Create Description Element
        const descriptionElement = document.createElement('p')
        descriptionElement.innerHTML = 'Description: ' + weaponsArray[index].description
        // Create Attack Value Element
        const attackValueElement = document.createElement('p')
        attackValueElement.innerHTML = 'Attack Value: ' + weaponsArray[index].attack
        weaponContainerElement.appendChild(nameElement)
        weaponContainerElement.appendChild(descriptionElement)
        weaponContainerElement.appendChild(attackValueElement)
        weaponsContainerElement.appendChild(weaponContainerElement)  
}
}

// MAP
const weaponsAttackWithCrit = weapons.map((weapon) => {
    const newWeapon = {
        name: weapon.name,
        description: weapon.description,
        attack: weapon.attack * 2.5
    }
    // what returns here is what you get
    return newWeapon
})

// FILTER
const weaponsAttackValueHigherThan100 = weapons.filter((weapon) => {
    return weapon.attack > 100; 
})

// SORT
const weaponsSortedByNameAscending = weapons.sort((weaponA, weaponB) => {
    if(weaponA.name > weaponB.name) {
        return 1
    }

    if(weaponA.name < weaponB.name) {
        return -1
    }

    if(weaponA.name === weaponB.name) {
        return 0
    }

})

// slice takes a part of array
const copyOfWeaponsSortedByNameAscending = weaponsSortedByNameAscending.slice()
const weaponsSortedByNameDescending = copyOfWeaponsSortedByNameAscending.reverse()

// APPLICATION CODE

addWeapons (weapons)

// BUTTONS

originalButtonElement.addEventListener('click', () => {
    removeWeapons ()
    addWeapons (weapons)
})

attackWithCritButtonElement.addEventListener('click', () => {
    //remove everything first
    removeWeapons ()
    addWeapons(weaponsAttackWithCrit)
    
})

higherAttackValueButtonElement.addEventListener('click', () => {
    //remove everything first
    removeWeapons ()
    addWeapons(weaponsAttackValueHigherThan100)
    
})

sortAscendingButtonElement.addEventListener('click', () => {
    //remove everything first
    removeWeapons ()
    addWeapons(weaponsSortedByNameAscending)
    
})

sortDescendingButtonElement.addEventListener('click', () => {
    //remove everything first
    removeWeapons ()
    addWeapons(weaponsSortedByNameDescending)
    
})

