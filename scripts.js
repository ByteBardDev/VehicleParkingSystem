document.addEventListener("DOMContentLoaded", function() {
    // Navbar toggle
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });

    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");

        if (!name.value || !email.value || !password.value) {
            alert("Please fill in all required fields.");
            event.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });

    // Gallery image preview
    const galleryImages = document.querySelectorAll(".grid-item img");
    galleryImages.forEach(function(image) {
        image.addEventListener("click", function() {
            const previewOverlay = document.createElement("div");
            previewOverlay.id = "previewOverlay";
            previewOverlay.innerHTML = `
                <div class="previewContainer">
                    <img src="${image.src}" alt="Image Preview">
                    <button id="closePreview">Close</button>
                </div>
            `;
            document.body.appendChild(previewOverlay);

            const closePreviewButton = document.querySelector("#closePreview");
            closePreviewButton.addEventListener("click", function() {
                document.body.removeChild(previewOverlay);
            });
        });
    });

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll("a[href^='#']");
    internalLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
