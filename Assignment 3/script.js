const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const form = document.getElementById('signup');
const button = document.getElementsByClassName('btn');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

function onClick(){
    const username = usernameEl.value;
    const email = emailEl.value;
    const password = passwordEl.value;
    const confirmPassword = confirmPasswordEl.value;
    if(usernameEl.value.length < 3 || usernameEl.value.length > 25 || usernameEl.value === '')
    {
        usernameError.textContent = "Username must be between 3 and 25 characters";
        usernameEl.style.borderColor = 'red';
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordEl.style.borderColor = 'red';
    }
    if (emailEl.value === '') {
        emailError.textContent = 'Email cannot be blank';
        emailEl.style.borderColor = 'red';
    }
    if (passwordEl.value === '') {
        passwordError.textContent = 'Password cannot be blank';
        passwordEl.style.borderColor = 'red';
    }
    if (confirmPasswordEl.value === '') {
        confirmPasswordError.textContent = 'Confirm password cannot be blank';
        confirmPasswordEl.style.borderColor = 'red';
    }
}