const body = document.querySelector("body")
const navMobile = document.querySelector(".nav-mobile")
const navBtn = document.querySelector(".hamburger")
const footerYear = document.querySelector(".footer__year")

const handleNav = () => {
	navBtn.classList.toggle("is-active")
	navMobile.classList.toggle("nav-mobile--active")

	if (navMobile.classList.contains("nav-mobile--active")) {
		body.classList.add("fixed-position")
	} else {
		body.classList.remove("fixed-position")
	}
}

navBtn.addEventListener("click", handleNav)
navMobile.addEventListener("click", handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
