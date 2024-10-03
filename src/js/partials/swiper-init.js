document.addEventListener("DOMContentLoaded", () => {
	const heroCarousel = document.querySelectorAll(".hero__slider");

	if (heroCarousel.length > 0) {
		heroCarousel.forEach(elem => {
			const heroCarouselNext = elem.nextElementSibling.querySelector(".swiper-btn-next");
			const heroCarouselPrev = elem.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				navigation: {
					nextEl: heroCarouselNext,
					prevEl: heroCarouselPrev,
				},
				autoplay: {
					delay: 5000,
					pauseOnMouseEnter: true
				}
			});
		});
	}
});
