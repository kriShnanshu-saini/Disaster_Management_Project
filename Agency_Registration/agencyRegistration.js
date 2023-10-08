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

// * Form Validation ----------------------------------------------

const form = document.querySelector('form');
const inputName = form.querySelector('#agency-name').value;
const inputEmail = form.querySelector('#agency-email').value;
const countryCode = form.querySelector('#country-code').value;
const inputNumber = form.querySelector('#agency-number');

// * --------------------------------------------------------------


// * show otp input when verify button clicked
const verifyBtn = form.querySelector('button.send-otp');
verifyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    form.querySelector('.frame-otp').dataset.visible = "true";
});

// * if otp is valid => change the data-is-verified = "true"

// * after the number is verified, show rest other frames
const displayRequirements = () => {
    // show other requirements needed to register
    form.querySelectorAll('[data-visible = "false"]').forEach(div => div.dataset.visible = "true");

    // hide the otp frame
    form.querySelector('.frame-otp').dataset.visible = "false";

    // change the icon in number input
    form.querySelector('.send-code .send-otp').style.display = "none";
    form.querySelector('.send-code i').style.display = "block";
}
if(inputNumber.closest('.form-element').dataset.isVerified === "true") displayRequirements();

if(form.dataset.valid === "true"){
    form.querySelector('button[data-function="register"]').removeAttribute('disabled');
}