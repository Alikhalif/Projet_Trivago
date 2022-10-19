const header = document.querySelector("header");
var myIconMenu = document.getElementById('menu-icon');
let scrll = document.querySelector('.up');

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0) ? myIconMenu.style.color = 'black' : myIconMenu.style.color = 'white';
	
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};



// var myScroll = document.getElementById('scrollUp');
// // myScroll.style.display = 'none';
// window.onscroll = function(){
	
// 	if(window.pageYOffset >= 400){
// 		myScroll.style.display = 'block';
// 	}
// 	else{
// 		myScroll.style.display = 'none';
// 	}
// }

// myScroll.onclick = function(){
// 	window.scrollTo(0,0);
// }



myIconMenu.style.color = 'white';
window.onscroll = function(){
	if(window.pageYOffset > 0){
		myIconMenu.style.color = 'black';
	}
	else{
		myIconMenu.style.color = 'white';
	}
};




window.onscroll = function(){
	if(this.scrollY >= 400){
		scrll.classList.add("show");
	}
	else{
		scrll.classList.remove("show");
	}
};

scrll.onclick = function(){
	window.scrollTo({
		top : 0,
		behavior : "smooth",
	});
}
