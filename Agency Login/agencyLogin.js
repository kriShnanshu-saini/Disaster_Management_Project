// * SHOW MENU FUNCTIONING ---------------------------------------
const showMenuBtn = document.querySelector('[data-function="open-menu"]');
const closeMenuBtn = document.querySelector('[data-function="close-menu"]');

showMenuBtn?.addEventListener("click", () => {
    document.querySelector("nav .menu").style.transform = "translateX(0)";
});

closeMenuBtn?.addEventListener("click", () => {
    document.querySelector("nav .menu").style.transform = "translateX(-100%)";
});
// * --------------------------------------------------------------

const form = document.querySelector('form');

// * Show/ hide password ------------------------------------------
const passwordField = form.querySelector('.password-input');
const showPassword = form.querySelector('.show-password');
const hidePassword = form.querySelector('.hide-password');

passwordField.querySelector('.password-visibility-icons').addEventListener('click', (event) => {
    const type = event.target.dataset?.passwordType === 'password' ? 'text' : 'password';
    showPassword.classList.toggle('hide');
    hidePassword.classList.toggle('hide');
    passwordField.querySelector('input#password').setAttribute('type', type);
})
// * ----------------------------------------------------------------