const name  =document.querySelector('.inputNama');
const inputName =document.querySelector('#name');
const wrongName =document.createElement('div');
name.insertBefore(wrongName, inputName);

inputName.addEventListener("input", (a) => {
    if(!inputName.value.match(/[A-Za-z/s]+/)) {
        wrongName.textContent = "Tidak boleh input selain Huruf !!";
        wrongName.style.cssText ='color: darkred;';
    } else {
        wrongName.textContent = "";
    }
});
const email =document.querySelector('.inputEmail');
const inputEmail =document.querySelector('#email');
const wrongEmail =document.createElement('div');
email.insertBefore(wrongEmail, inputEmail);

inputEmail.addEventListener("input", (a) => {
    if(!inputEmail.validity.valid) {
        wrongEmail.textContent   = "Isi email dengan benar !!";
        wrongEmail.style.cssText = 'color: darkred;';
    }else{
        wrongEmail.textContent = "";
    }
});

const interest   = document.querySelector('.options');
const selection  = document.querySelector('#interested');
const noSelection = document.createElement('div');
interest.insertBefore(noSelection, selection);

interest.addEventListener("click", (a) => {
    if(!interest.valid) {
        noSelection.textContent = "Silahkan dipilih.";
        noSelection.style.cssText ='color: darkred;';
    } else{
        noSelection.textContent = "";
    }
});

const formTitle = document.querySelector('.titleForm');
const button = document.querySelector('#button');
const validate  = document.createElement('div');
formTitle.appendChild(validate);

const form =document.querySelector('#form'); 

form.addEventListener("submit", (a) => {
    a.preventDefault()
    if((inputName.value == "") || (inputEmail.value == "") || (interest.value == "")) {
        validate.textContent = "Tolong cek kembali, masih ada yang kosong";
        validate.style.cssText = 'max-width: 300px; font-size: 17px; color: darkred;';
    } else {
        validate.textContent = "Berhasil !, tunggu email yang akan dikirimkan oleh tim kami";
        validate.style.cssText = 'max-width: 300px; font-size: 17px; color: darkgreen;';
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("interested").value = "Kosong";
        return false; 
    }
});

/*
const submit = document.getElementById("button");

submit.addEventListener("click", function(a){
    a.preventDefault();
    validate();
});

function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "" ) {
        alert("Tolong cek kembali, masih ada yang kosong");
        return false;
    }
    alert("Berhasil !, tunggu email yang akan dikirimkan oleh tim kami");
    //kosongin form nya
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    return false;
} */

const slidePicture = document.querySelectorAll('.slidePicture > img');

function slideshowImg(slide) {
    let i = 0;
    slidePicture[i].classList.remove('inactive');
    setInterval(() => {
        i++;
        if( i == slide) {
            i = 0;
            slidePicture[slide - 1].classList.add('inactive');
        }
        slidePicture[i].classList.remove('inactive');
        if (i > 0) {
            slidePicture[i - 1].classList.add('inactive');
        };
    } ,2600);
};
slideshowImg(3);