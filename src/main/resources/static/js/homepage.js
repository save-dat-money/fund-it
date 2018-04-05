const toggleMenu = () => {
	const navButton = document.querySelector(".header__nav__button");
	const navMenu = document.querySelector(".header__nav");
	if (navButton) navButton.addEventListener('click', () =>{
		navMenu.classList.toggle("show__menu");
	});
};

toggleMenu()