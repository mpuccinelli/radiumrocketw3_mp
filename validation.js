var errors = ['Keep in mind separating first and last name','Please enter a valid email adress','At least 8 characters, only numbers and letters',
'Ups! Passwords do not match. Please check.','Sorry! You must be 18 years old to suscribe!','No spaces, dash or parenthesis','Please enter a valid adress. Street & number',
'Please, insert full city name','Postal code must have 3 or more digits','Please enter a valid DNI'];


var inputs = document.getElementsByClassName('form-input')


inputs[0].addEventListener('blur',showError);

function showError(e){
    var text = e.target.value;
    console.log(text);
}