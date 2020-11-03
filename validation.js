var inputs = document.getElementsByClassName('form-input')
var errors = document.getElementsByClassName('error-sign')

inputs[0].addEventListener('blur',validName);
inputs[0].addEventListener('focus',correct);

inputs[1].addEventListener('blur', validEmail);
inputs[1].addEventListener('focus', correct);

inputs[2].addEventListener('blur',validPass);
inputs[2].addEventListener('focus', correct);

// inputs[0].addEventListener('blur',validPassConfirm);
// inputs[0].addEventListener('blur',validAge);
// inputs[0].addEventListener('blur',validPhone);
// inputs[0].addEventListener('blur',validAdress);
// inputs[0].addEventListener('blur',validCity);
// inputs[0].addEventListener('blur',validPC);
// inputs[0].addEventListener('blur',validDNI);

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
    console.log(typeof(text[3]))
    var notvalid = false;

    for (i=0;i<text.length;i++){
        // USED REGULAR EXPRESION /^[A-Za-z]+$/ BECAUSE THERE IS NO TYPE "LETTER", SO I COULD NOT SEPARATE LETTERS FROM SPECIAL CHARACTERS LIKE !,#, ETC.
        // USED REGULAR EXPRESION /^[0-9]+$/ BECAUSE CHARACTERS OF INPUT TEXT ARE TYPE "STRING", THIS WAY I CAN FIND OUT IF THE CHARACTER IS A NUMBER

        if (text[i].match(/^[A-Za-z]+$/) === null && text[i].match(/^[0-9]+$/) === null) {
            notvalid = true;
        }
    }
    if (text != ''){
        if (text.length<8 || notvalid){
            e.target.nextElementSibling.style.display = 'block';
        }
    }

}
