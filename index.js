//Get all p elements
let p = document.querySelectorAll('p')
console.log(p)


//Get submit & listen for a click event on submit
const input = document.getElementById('number').addEventListener('input', numHandler)
let submitBtn = document.getElementById('btn').addEventListener('click', numHandler)

function numHandler(e){
    number = e.target.value
    //check divisibility by 2
    if (number % 2 === 0){
        p[0].textContent = 'True'
       }else{
        p[0].textContent = `False`
       }

    //check divisibility by 3
    if (number % 3 === 0){
        p[1].textContent = `True`
    }
    else{
        p[1].textContent = `False`
    }

    //check divisibility by 4
    if (number.slice(len-2)/4 === 0){
        p[2].textContent = `True`
    }
    else{
        p[2].textContent = `False`
    }

    
    // console.log(number)
    // e.preventDefault()
    // // submitHandler(number)
    // parsedNumber = ((number) => (number))
    // parsedNumber = parseInt(number)
    // console.log(parsedNumber)
    
}
// function submitHandler(){
//     //get and parse input
//     const parsedNumber = parseInt((number) => (number))
   
// }

//Divisibility by 2
//last digit must be even i.e. divisible by 2

function CheckDivisibilityBy2(){
   
}


// CheckDivisibilityBy2(8)
// CheckDivisibilityBy2(2)
