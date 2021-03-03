let swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",
	slidesPerView: 1,

	spaceBetween: 100,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		// dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


});
let swiper_two = new Swiper('.swiper__popular', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	slidesPerView: 4,
	spaceBetween: 30,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


});
let swiper_two_tab = new Swiper('.swiper__popular.tab', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	slidesPerView: 2,
	spaceBetween: 30,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


});
let swiper_two_mob = new Swiper('.swiper__popular.mob', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	slidesPerView: 1,
	spaceBetween: 0,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let swiper_categories = new Swiper('.swiper__categories', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	slidesPerView: 5,
	spaceBetween: 30,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
let swiper_categories_tab = new Swiper('.swiper__categories.tab', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	slidesPerView: 2,
	spaceBetween: 50,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
let swiper_categories_mob = new Swiper('.swiper__categories.mob', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	slidesPerView: 1,
	spaceBetween: 50,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let valute = document.querySelector(".select__wrapper");
let select = document.querySelector("select");
select.addEventListener("click", function () {
	valute.classList.toggle("active");
})
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
})

let wishlist, account, valute_div, search, input;
wishlist = document.querySelector(".wishlist");
account = document.querySelector(".dropdown.account");
valute_div = document.querySelector(".dropdown__valute");
search = document.querySelector(".search-bar");
input = search.querySelector("input");

if (window.matchMedia("(max-width: 520px)").matches) {
	console.log(search);

	search.addEventListener('mouseover', function () {
		account.style.display = "none";
		wishlist.style.display = "none";
		valute_div.style.display = "none";
	});

	input.addEventListener('focus', function () {
		account.style.display = "none";
		wishlist.style.display = "none";
		valute_div.style.display = "none";
	});
	input.addEventListener('blur', function () {
		account.style.display = "block";
		wishlist.style.display = "block";
		valute_div.style.display = "flex";
	});

	search.addEventListener('mouseout', function () {
		account.style.display = "block";
		wishlist.style.display = "block";
		valute_div.style.display = "flex";
	});



	console.log("so");
} else {
	console.log("all ok");
}
let client_width;
window.addEventListener("resize", function () {
	client_width = document.body.clientWidth;

	if (client_width <= 520) {

		search.addEventListener('mouseover', function () {
			account.style.display = "none";
			wishlist.style.display = "none";
			valute_div.style.display = "none";
		})
		search.addEventListener('mouseout', function () {
			account.style.display = "block";
			wishlist.style.display = "block";
			valute_div.style.display = "flex";
		})


	} else {

	}
})


