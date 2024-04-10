const REGEX_NAME = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;
const REGEX_NUMBER = /^[0](212|412|414|424|416|426)[0-9]{7}$/;  

//selecction of inputs and buttons 
const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector("#input-number");
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#form');
//validations
let nameValidation = false;
let numberValidation = false;

//function to validate inputs with buttons   
const validateInput = (input, validation) => {
    //save <p> 
    const infoText = input.parentElement.children[2];
    if(input.value === ''){
        //when in input there isn't nothing 
        input.classList.remove('correct');
        input.classList.remove('incorrect');
        infoText.classList.remove('show-info');
    } else if (validation){
        // when the validation is correct or true
        input.classList.add('correct');
        input.classList.remove('incorrect');
        infoText.classList.remove('show-info');
    } else {
        //when the validation is incorrect or false
        infoText.classList.add('show-info') ;
        input.classList.add('incorrect');
        input.classList.remove('correct');
    }
    
    //validation for the button 
    if (nameValidation && numberValidation){
        //when the validation of both is true
        formBtn.disabled = false;
    } else {
        // when the validation of one of both is false
        formBtn.disabled = true;
    }
}
//event in input name

//test return true or false
// only exist with Regex and coamparate the REGEX with your put in ()
inputName.addEventListener('input', e => {
    nameValidation = REGEX_NAME.test(inputName.value);
    validateInput(inputName, nameValidation);
});
// event in input number
inputNumber.addEventListener('input', e => {
    numberValidation = REGEX_NUMBER.test(inputNumber.value);
    validateInput(inputNumber, numberValidation);
});

form.addEventListener('submit', e=>{
    // prevent the default action of submit
    e.preventDefault();
    if (!nameValidation || !numberValidation) return;
    console.log(1);
});