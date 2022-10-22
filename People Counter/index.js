// what these next couple lines mean:

// we set count to 0.

//we created and set countEl to get the info from the html item with the id "count-el".

//the function says that count will now add 1 when button is pressed 
//and that the inner text of count-el will be changed to reflect that



let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


function increment() {
    // += means count = count + 1
    count += 1
    countEl.innerText = count
}

//Creating the save button function

function save() {
    // this adds the past increments to a list at the bottom
    let countStg = count + " - "
    // textContent is a way to have the spaces show up
    saveEl.textContent += countStg
    //resetting the people entered count to 0
    count = 0
    countEl.textContent = count
}



