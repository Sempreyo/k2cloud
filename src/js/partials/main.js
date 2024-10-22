document.addEventListener("DOMContentLoaded", () => {
	const HEADER_SCROLL_BG = 50;
	const HEADER_SCROLL_HIDE = 400;
	function insertAfter(newNode, existingNode) {
		existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
	}

	let selectField = document.querySelector(".ss-item-type-select");
	const report = document.querySelector(".ss-form-report");
	const selects = $("select.ss-form-input");
	const phoneField = $('.ss-form-input[type="tel"]');

	if (selects && selects.length > 0 && !report) {
		/* Первый элемент по умолчанию disabled */
		const disabledOption = selects.find("option:first-child");
		disabledOption.text("Предпочтительный способ связи");
		disabledOption.attr("disabled", "true");

		selects.select2({
			minimumResultsForSearch: -1
		});
	}

	/* Маска для телефона */
	if (phoneField && phoneField.length > 0 && !report) {
		phoneField.inputmask("+7 (999) 999-99-99", {
			showMaskOnHover: false
		});
	}
	if (selectField) {
		const element = document.createElement("label");
		element.classList.add("ss-form-item", "ss-form-item--checkbox");
		element.innerHTML = '<ul class="ss-form-input field field--checkbox"><input type="checkbox" name="policy" required><b></b><span>Ознакомлен с <a href="https://www.cnews.ru/redirect.php?658111670ab154c994d" target="_blank">Политикой в области обработки персональных данных</a> и даю <a href="https://www.cnews.ru/redirect.php?906115670ab168430ee" target="_blank">согласие на их обработку</a></span></ul>';

		insertAfter(element, selectField);
	}

	const openNav = () => {
		let bodyState = document.body.getAttribute("data-state");

		if (bodyState === "mobile-menu") {
			document.body.dataset.state = "";
		} else {
			document.body.dataset.state = "mobile-menu";
		}
	}

	/* Мобильное меню */
	const burger = document.querySelector(".header__burger");
	const closeButtonMenu = document.querySelector(".header__menu-close");

	burger.addEventListener("click", openNav);
	closeButtonMenu.addEventListener("click", openNav);

	/* Смарт хэдер */
	const header = document.querySelector(".header");
	let previousTop = window.scrollY;
	header.classList.remove("header--hide");

	const setHeaderStyles = () => {
		let currentTop = window.scrollY;

		if (currentTop > HEADER_SCROLL_BG) {
			header.classList.add("header--bg");
		} else {
			header.classList.remove("header--bg");
		}

		if (currentTop > HEADER_SCROLL_HIDE && currentTop > previousTop) {
			header.classList.add("header--hide");
		} else {
			header.classList.remove("header--hide");
		}
		previousTop = currentTop;
	};

	document.addEventListener("scroll", () => {
		setHeaderStyles();
	});

	setHeaderStyles();

	/* Якори */
	const anchors = document.querySelectorAll('.anchor');

	if (anchors && anchors.length > 0) {
		anchors.forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				//e.preventDefault();

				if (window.location.hash) {
					document.querySelector(window.location.hash).scrollIntoView({
						behavior: 'smooth'
					});
				}

				if (window.matchMedia("(max-width: 767px)").matches) {
					openNav();
				}
			});
		});
	}

	const hero = document.querySelector(".hero");
	if (hero) {
		/* Разделить строку на символы */
		const splitText = new SplitType(".hero__title", {
			types: "chars"
		});

		/* Анимация появления символов */
		const heroObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const chars = document.querySelectorAll(".hero__title .char");

					chars.forEach((el, index) => {
						setTimeout(() => {
							el.style.transform = 'translateY(0)';
						}, 50 * index);
					});
				}
			});
		});

		heroObserver.observe(hero);
	}

	/* Скролл к началу */
	const buttonUp = document.querySelector(".button-up");

	const initButtonUp = () => {
		if (buttonUp) {
			window.addEventListener("scroll", buttonUpHandler);

			buttonUp.addEventListener("click", () => {
				document.querySelector("body").scrollIntoView({
					behavior: 'smooth'
				});
			});
		}
	}

	const buttonUpHandler = () => {
		scroll = window.pageYOffset;

		if (scroll > 300) {
			buttonUp.classList.add("button-up--visible");
		} else {
			buttonUp.classList.remove("button-up--visible");
		}
	}

	initButtonUp();
});
