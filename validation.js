var inputs = document.getElementsByClassName('form-input');

for (i=0;i<inputs.length;i++){
    inputs[i].addEventListener('focus',correct);
}

inputs[0].addEventListener('blur',validName);
inputs[1].addEventListener('blur',validEmail);
inputs[2].addEventListener('blur',validPass);
inputs[3].addEventListener('blur',validPassConfirm);
inputs[4].addEventListener('blur',validAge);
inputs[5].addEventListener('blur',validPhone);
inputs[6].addEventListener('blur',validAdress);
inputs[7].addEventListener('blur',validCity);
inputs[8].addEventListener('blur',validCity)
inputs[9].addEventListener('blur',validDNI);

function correct(e){
    e.target.nextElementSibling.style.display = 'none';
}

function validName(e){
    var text = e.target.value;
    var space = e.target.value.indexOf(' ');

    if (text != ''){
        if (text.length<7 || space == 0 || space == -1 || space == text.length){
            e.target.nextElementSibling.style.display = 'block';
        }
    }

}

function validEmail(e){
    var text = e.target.value;
    var at = e.target.value.indexOf('@');

    if (text != ''){
        if (text.substr(text.length-4) != ".com" || at == 0 || at == -1 || at == text.length){
            e.target.nextElementSibling.style.display = 'block';
        }
    }

}

function validPass(e){
    var text = e.target.value;
    var notvalid = false;

    for (i=0;i<text.length;i++){
        // USED REGULAR EXPRESION /^[A-Za-z]+$/ BECAUSE THERE IS NO TYPE "LETTER", SO I COULD NOT SEPARATE LETTERS FROM SPECIAL CHARACTERS LIKE !,#, ETC.

        if (text[i].match(/^[A-Za-z]+$/) === null && typeof(text[i] % 1) != 'number') {
            notvalid = true;
        }
    }
    if (text != ''){
        if (text.length<8 || notvalid){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

function validPassConfirm(e){
    var text = e.target.value;
    if (text != ''){
        if (text != inputs[2].value){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

function validAge(e){
    var text = e.target.value;
    if (text != ''){
        if (text<18 || text % 1 != 0){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

function validPhone(e){
    var text = e.target.value;
    if (text != ''){
        if (text.length<7 || text % 1 != 0){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

function validAdress(e){
    var text = e.target.value;
    var space = e.target.value.indexOf(' ');
    var notvalid = false;
    if (text != ''){
        for (i=0;i<space;i++){
            // USED REGULAR EXPRESION /^[A-Za-z]+$/ BECAUSE THERE IS NO TYPE "LETTER", SO I COULD NOT SEPARATE LETTERS FROM SPECIAL CHARACTERS LIKE !,#, ETC.
            if (text[i].match(/^[A-Za-z]+$/) === null){
                notvalid = true;
            }
        }
        for (i=space+1;i<text.length;i++){
            if (typeof(text[i] % 1) != 'number'){
                notvalid = true;
            }
        }
        if (text.length<5 || space == 0 || space == -1 || space == text.length || notvalid){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

function validCity(e){
    var text = e.target.value;
    if (text != ''){
        if (text.length<3){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

function validDNI(e){
    var text = e.target.value;
    if (text != ''){
        if (text.length <7 || text.length >8){
            e.target.nextElementSibling.style.display = 'block';
        }
    }
}

var send = document.getElementById('send');
var errors = document.getElementsByClassName('error-sign');

send.addEventListener('click', sign);

function sign(e){
    e.preventDefault();
    var errorValidation = false;
    var a = 0;
    var string = '';
    var information = '';
    var messages = [];

    for (i=0;i<errors.length;i++){
        if(errors[i].style.display == 'block'){
            errorValidation = true;
            messages[a] = errors[i].innerText;
            a++;
        }
    }
    if (errorValidation){
        for (i=0;i<messages.length;i++){
            string = string + '\n' + messages[i];
        }
        alert(string);
    }else{
        for (i=0;i<inputs.length;i++){
            information = information + '\n' + inputs[i].value;
        }
        alert(information);
    }

}