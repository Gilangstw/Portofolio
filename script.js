
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

        window.addEventListener("resize", function () {

            if (window.innerWidth > 600) {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }

    // ======================================
    // 2. TAHUN OTOMATIS FOOTER
    // ======================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});





// ==========================================
// DRAG SCROLL SERTIFIKAT
// ==========================================

document.querySelectorAll("#tentang .certificate-grid").forEach((slider) => {

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;
    let hasMoved = false;

    slider.addEventListener("mousedown", (e) => {

        if (e.button !== 0) return;

        isDragging = true;
        hasMoved = false;

        startX = e.pageX;
        scrollStart = slider.scrollLeft;

        slider.classList.add("dragging");

    });

    slider.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        const distance = e.pageX - startX;

        if (Math.abs(distance) > 5) {
            hasMoved = true;
        }

        if (hasMoved) {
            e.preventDefault();
            slider.scrollLeft = scrollStart - distance;
        }

    });

    window.addEventListener("mouseup", () => {

        isDragging = false;
        slider.classList.remove("dragging");

    });

    slider.addEventListener("mouseleave", () => {

        isDragging = false;
        slider.classList.remove("dragging");

    });

});
