/* NCSU FULL STACK SOFTWARE DEVELOPER INTRO - ASSESSMENT PROJECT */
/* Philip Thomas - 20220130 - PT@PhilipT.com                     */
/*   initial attempt took about an hour (including some "quality check" time!)   */
/*   code is kinda klunky; could be much better parameterized,
    but would have to change some of the basic assumptions/existing code  */

/*    INITIALIZATION [do you think I used to be a COBOL programmer? ;)]    */

// First, tell us your name
let yourName = "Philip Thomas" // HINT: Replace this with your own name!

// Code to update name display
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const gbPlusBtn = document.querySelector('#add-gb') // adding a constant for add-gb button by selecting the element with an id of add-gb
const ccPlusBtn = document.querySelector('#add-cc') // adding a constant for...
const sugarPlusBtn = document.querySelector('#add-sugar') // adding a constant for...
const gbMinusBtn = document.querySelector('#minus-gb') // adding a constant for...
const ccMinusBtn = document.querySelector('#minus-cc') // adding a constant for...
const sugarMinusBtn = document.querySelector('#minus-sugar') // adding a constant for...

/*    FUNCTIONS      */

function updateTotal() {
    let dummyElement = document.querySelector('#qty-total')
    dummyElement.textContent = gb + cc + sugar
  }
  
function ltZero() {
   window.alert("Oops! You can't order fewer than ZERO cookies!")
}

/*      EVENT LISTENERS     */

gbPlusBtn.addEventListener('click', function(){ /* onClick(increment gb cookie count) */
    gb++
    let dummyElement = document.querySelector('#qty-gb')
    dummyElement.textContent = gb
    updateTotal()
})

ccPlusBtn.addEventListener('click', function(){ /* onClick(increment cc cookie count) */
    cc++
    let dummyElement = document.querySelector('#qty-cc')
    dummyElement.textContent = cc
    updateTotal()
})

sugarPlusBtn.addEventListener('click', function(){ /* onClick(increment sugar cookie count) */
    sugar++
    let dummyElement = document.querySelector('#qty-sugar')
    dummyElement.textContent = sugar
    updateTotal()
})

gbMinusBtn.addEventListener('click', function(){ /* onClick(decrement gb cookie count) */
    gb--
    let dummyElement = document.querySelector('#qty-gb')
    dummyElement.textContent = gb
    if (gb < 0) {
        gb = 0
        dummyElement.textContent = gb
        ltZero()
    }
    updateTotal()
})

ccMinusBtn.addEventListener('click', function(){ /* onClick(decrement cc cookie count) */
    cc--
    let dummyElement = document.querySelector('#qty-cc')
    dummyElement.textContent = cc
    if (cc < 0) {
        cc = 0
        dummyElement.textContent = cc
        ltZero()
    }
    updateTotal()
})

sugarMinusBtn.addEventListener('click', function(){ /* onClick(decrement sugar cookie count) */
    sugar--
    let dummyElement = document.querySelector('#qty-sugar')
    dummyElement.textContent = sugar
    if (sugar < 0) {
        sugar = 0
        dummyElement.textContent = sugar
        ltZero()
    }
    updateTotal()
})

