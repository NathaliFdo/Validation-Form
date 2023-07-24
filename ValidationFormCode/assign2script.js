const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var number = document.getElementById("number");
var length = document.getElementById("length");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});



const setError = (element, message) => {
    const formInputs = element.parentElement;
    const errorDisplay = formInputs.querySelector('.error');

    errorDisplay.innerText = message;
    formInputs.classList.add('error');
    formInputs.classList.remove('success')
}

const setSuccess = element => {
    const formInputs = element.parentElement;
    const errorDisplay = formInputs.querySelector('.error');

    errorDisplay.innerText = '';
    formInputs.classList.add('success');
    formInputs.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function calculate_age(){
	var birth_date = new Date (document.getElementById("dob").value);
	var birth_date_day = birth_date.getDate();
	var birth_date_month = birth_date.getMonth();
	var birth_date_year = birth_date.getFullYear();
	
	var today_date= new Date();
	var today_day = today_date.getDate();
	var today_month = today_date.getMonth();
	var today_year = today_date.getFullYear();
	
	var calculated_age = 0;
	
	if (today_month > birth_date_month) {
		calculated_age = today_year - birth_date_year;
	} 
	else if(today_month == birth_date_month){
		if (today_day >= birth_date_day){
			calculated_age = today_year - birth_date_year;
		} else {
			calculated_age = today_year - birth_date_year - 1;
		}
	}
	else {
		calculated_age = today_year - birth_date_year - 1;
	}
	
	var output_value = calculated_age;
	document.getElementById("calculated_age").innerHTML= output_value;
}

function username_Validation(){
	var uName = document.getElementById('username').value;
   
    if(uName.match(/[^a-z]/)){
		if(uName.match(/\s/g)){
			document.getElementById('username_error').innerHTML='Username should not contain spaces';
			span_error('username_error');
		} else{
			document.getElementById('username_error').innerHTML='Username must contains simple lettrs';
			span_error('username_error');
		}
    } else{
        span_success('username_error');
    }
}

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  
  if (checkBox.checked == false){
    document.getElementById("submitBtn").disabled = true;
  } else {
    document.getElementById("submitBtn").disabled = false; 
  }
}

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
 
  var lettersPassword = /[a-zA-Z]/g;
  if(myInput.value.match(lettersPassword)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

}
const validateInputs = () => {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const dobValue = dob.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
	
	

	if(firstNameValue === '') {
        setError(firstName, 'First Name is required');
    } else if (firstNameValue.length > 30 ) {
        setError(firstName, 'First Name should be less than 30 characters.')
    }else {
        setSuccess(firstName);
    }
	
	if(lastNameValue === '') {
        setError(lastName, 'Last Name is required');
    }  else if (lastNameValue.length > 30 ) {
        setError(lastName, 'Last Name should be less than 30 characters.')
    }else {
        setSuccess(lastName);
    }
	
	if(dobValue === '') {
        setError(dob, 'Select date of birth');
    } else {
        setSuccess(dob);
		
    }
	
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length > 10 ) {
        setError(username, 'Username should have maximum of 10 characters.')
    }
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
	
	
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length >15 ) {
        setError(password, 'Password should not be more than 15 character.')
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    } else {
        setSuccess(confirmPassword);
    }

};

