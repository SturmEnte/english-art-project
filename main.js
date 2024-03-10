const container = document.querySelector("#wrapper");
const slides = container.querySelectorAll(".slide");

window.addEventListener("scroll", () => {
	let scrollPosition = window.scrollY;
	let snappedSlideIndex = Math.floor(scrollPosition / slides[0].clientHeight);

	container.scrollTo({
		top: snappedSlideIndex * slides[0].clientHeight,
		behavior: "smooth",
	});

	console.log("Scroll");
});
