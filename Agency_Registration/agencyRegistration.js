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

const form = document.querySelector("form");
const inputName = form.querySelector("#agency-name").value;
const inputEmail = form.querySelector("#agency-email").value;
const countryCode = form.querySelector("#country-code").value;
const inputNumber = form.querySelector("#agency-number");

// * --------------------------------------------------------------

function playTimer() {
    const timerPlaceholder = form.querySelector('.timer');
    let seconds = 20;
    let timerInterval = setInterval(() => {
        seconds--;
        let html = `00:${String(seconds).padStart(2, '0')}`;
        timerPlaceholder.textContent = html;

        if(seconds === -1){
            timerPlaceholder.parentElement.innerHTML = '<a href="" style="font-weight:bold;">Resend OTP</a>';
            clearInterval(timerInterval);
        };
    }, 1000);
}

// * show otp input when verify button clicked
const verifyBtn = form.querySelector("button.send-otp");
verifyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    form.querySelector(".frame-otp").dataset.visible = "true";
    playTimer();
});

// * if otp is valid => change the data-is-verified = "true"

// * after the number is verified, show rest other frames
const displayRequirements = () => {
    // show other requirements needed to register
    form.querySelectorAll('[data-visible = "false"]').forEach(
        (div) => (div.dataset.visible = "true")
    );

    // hide the otp frame
    form.querySelector(".frame-otp").dataset.visible = "false";

    // change the icon in number input
    form.querySelector(".send-code .send-otp").style.display = "none";
    form.querySelector(".send-code i").style.display = "block";
};
if (inputNumber.closest(".form-element").dataset.isVerified === "true")
    displayRequirements();

if (form.dataset.valid === "true") {
    form.querySelector('button[data-function="register"]').removeAttribute(
        "disabled"
    );
}

// * Show/ hide password ------------------------------------------
const passwordField = form.querySelectorAll(".password-input");
passwordField.forEach((field) => {
    const showPassword = field.querySelector(".show-password");
    const hidePassword = field.querySelector(".hide-password");

    field
        .querySelector(".password-visibility-icons")
        .addEventListener("click", (event) => {
            const type =
                event.target.dataset?.passwordType === "password"
                    ? "text"
                    : "password";
            showPassword.classList.toggle("hide");
            hidePassword.classList.toggle("hide");
            field.querySelector("input#password").setAttribute("type", type);
        });
});
// * ----------------------------------------------------------------


