
// I declare the input and output by using dom Element
const input = document.getElementById('inputNumber');
const textResult = document.getElementById('textResult');
const numberResult = document.getElementById('numberResult');
const error = document.getElementById('error');
// buttons for submit and clear input and outputs
const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clearBtn');

// this function is for clearing the input and output
clearBtn.addEventListener('click',()=>{
    textResult.innerText = '';
    numberResult.innerText = '';
    input.value = '';
    error.innerText = '';
}) 
// this function is for checking if the input number is prime or not
function primeNumber(){
    
    if(input.value % 2 == 0){
        textResult.innerHTML = "Not a Prime Number"
        
    }
    else{
        textResult.innerHTML = "Prime Number"
    }
}

/**
 * Calculates the factorial of a given number and updates the inner HTML of an element with id 'numberResult'.
 * 
 * @param {number} num - The number to calculate the factorial of.
 */

function factorial(num){
    let result = 1;
    // loop through the number and get the factorial
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    // check if the number is prime
    if(primeNumber()){
        numberResult.innerHTML = `Factorial: ${result}`;
    }
    else{
        numberResult.innerHTML = ``;
    }
   
    

}
// this function is for displaying the result of the prime number and the factorial of the input number
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();

   try{
    // check if the input is not a number
    if(isNaN(input.value)){
        error.innerHTML = "Invalid Input"
    }
    // check if the input is empty
    else if(input.value == ""){
        error.innerHTML = "Please Enter a Number"
    }
    // if the input is correct
    else{
        primeNumber();
        factorial(input.value)
        error.innerHTML = "";
    }
   }
    // catch the error and display the error message
   catch(error)
   {
    textResult.innerHTML = error.message;
   }
})


