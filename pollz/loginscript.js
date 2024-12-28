let navlist = document.querySelector('.navlist');

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