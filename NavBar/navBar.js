// navbar.js
// Function to include the navigation bar
function includeNavbar() {
    const header = document.querySelector("header");

    // Fetch and insert the navigation bar HTML
    fetch("./navBar.html")
        .then((response) => response.text())
        .then((navbarHtml) => {
            header.innerHTML = navbarHtml;
        })
        .catch((error) => {
            console.error("Error loading navigation bar:", error);
        });
}

// Call the function to include the navigation bar
includeNavbar();
