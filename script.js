const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//Error Outline

function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Success outline

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//Email check
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//check Fields

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === ''){
            showError(input , `${input.id} is required`)
        }
    })
    
}


//check length

function checkLength(input, min) {
    if (input.value.length < min) {
        showError(input, `${input.id} must be atleast ${min} characters`)
    }
    else{
        showSuccess(input)
    }
    
}

//Password confirm match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match")
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username , email, password, password2])
    checkLength(username, 3)
    checkLength(password, 6)
    checkPasswordMatch(password, password2)
})

//