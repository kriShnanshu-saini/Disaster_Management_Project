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




// * Fetch contact details from DB and show them ------------------

function fetchContacts() {
    return new Promise((resolve, reject) => {
        fetch('')
            // .then(response => resolve({
            //     name: 'Ambulance',
            //     number: 102,
            //     distance: '3',
            //     location: 'Bhim nagar'
            // }))
            .then(response => resolve(response.json()))
            .catch(error => reject(error))
    })
}

async function printContacts() {
    try {
        // fetch contacts from the DB
        const response = await fetchContacts();

        // displaying each contact 
        response.forEach(contact => {
            const contactCard = `
                <li class="contact">
                    <div class="contact__content">
                        <h3 class="contact__name">${contact.name} (${contact.number})</h3>
                        <div class="contact-info">
                            <p class="distance">Distance: ${contact.distance}km</p>
                            <p class="location">Location: ${contact.location}</p>
                        </div>
                    </div>
                    <div class="contact__icon">
                        <i class="ri-phone-fill"></i>
                    </div>
                </li>
            `;
            document.querySelector('.contact-container')
                .insertAdjacentHTML("beforeend", contactCard);
        })
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

printContacts();

// * ----------------------------------------------------------------