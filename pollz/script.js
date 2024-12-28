let navlist = document.querySelector('.navlist');

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay: 200,origin:'top'});
sr.reveal('.hero-img',{delay: 400,origin:'right'});
sr.reveal('.icons',{delay: 450,origin:'left'});
sr.reveal('.scroll-down',{delay: 450,origin:'right'});
sr.reveal('.Copyright',{delay: 450,origin:'left'});

// JavaScript for toggling the navigation bar on mobile view
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
	// navLinks.classList.toggle("active");
	const element = document.querySelector(".sidebar");
	const curr = element.getAttribute("open");
	if (!curr) {
		element.style.transform = "translateX(0px)";
		element.setAttribute("open", "open");
	} else {
		if (curr === "open") {
			element.style.transform = "translateX(-100%)";
			element.setAttribute("open", "closed");
		} else {
			element.style.transform = "translateX(0px)";
			element.setAttribute("open", "open");
		}
	}
});