//Get all p elements
let p = document.querySelectorAll('p')
// console.log(p)


//Get submit & listen for a click event on submit
const input = document.getElementById('number').addEventListener('input', numHandler)
let submitBtn = document.getElementById('btn').addEventListener('click', submitHandler)

function numHandler(e){
    number = e.target.value
    e.preventDefault()
    // submitHandler(number)
    
}
function submitHandler(){
    //get and parse input
    let parsedNumber = parseInt(number)
   
}

//Divisibility by 2
//last digit must be even i.e. divisible by 2

function CheckDivisibilityBy2(parsedNumber){
    if (length(parsedNumber-1))/2 = 1){
        return true

    }
    else{
        return false
    }
    p[0] = concole.log(CheckDivisibilityBy2)
}

