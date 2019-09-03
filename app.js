// add to cart
let productsCountEl = document.getElementById('products-count');
let addToCartButtons = document.querySelectorAll('.add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function(){
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
	})
}
// change like button state
let likeButtons = document.querySelectorAll('.like');
for (let i = 0;i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function() {
		if (this.classList.contains('liked')) {
			this.classList.remove('liked')
		} else {
			this.classList.add('liked')
		}	
	})
}

// change quantity state 
let decrementButton = document.querySelectorAll('.decrement-button');
let incrementButton = document.querySelectorAll('.increment-button');
let quantityInput = document.querySelectorAll('.quantity-input input');
let minProductCount = 1;
let maxProductCount = 10;

for (let i = 0;i < incrementButton.length; i++) {
incrementButton[i].addEventListener('click', function () {
	let currentValue = +quantityInput[i].value;
		if (currentValue < maxProductCount) {
		quantityInput[i].value = currentValue + 1;
	} else {
		quantityInput[i].value = currentValue;
	} 
})
}

for (let i = 0;i < decrementButton.length; i++) {
decrementButton[i].addEventListener('click', function () {
	let currentValue = +quantityInput[i].value;
	if (currentValue > minProductCount) {
		quantityInput[i].value = currentValue - 1;
	} else {
		quantityInput[i].value = currentValue;
	} 
})
}

// Anoother method
// 	let currentValue = +quantityInput.value;
//  function toggleButtonsState(count) {
// 	if(count <= minProductCount) {
// 		decrementButton.disabled = true;
// 		} else {
// 		decrementButton.disabled = false;
// 		}
// 	}


// incrementButton.addEventListener('click', function () {
// 	let currentValue = +quantityInput.value;
// 	let nextValue = currentValue + 1;
// 	quantityInput.value = nextValue;
// toggleButtonsState(nextValue);
// });


// decrementButton.addEventListener('click', function () {
// 	let currentValue = +quantityInput.value;
// 	let nextValue = currentValue - 1;
// 	quantityInput.value = nextValue;
// toggleButtonsState(nextValue);
// });

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    dots:true,
  });
});
