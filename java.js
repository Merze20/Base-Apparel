const form = document.querySelector('.container form');
const email = document.querySelector('form input[type=email]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;

    if (validateEmail(email.value)){
        // console.log('this is valid');
        form.classList.remove('error');
    }
    else{
        // console.log('email is invalid');
        form.classList.add('error');
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}