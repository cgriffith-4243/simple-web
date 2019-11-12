//Use 2. Filtering images 
filterArtMedium("all");

function filterArtMedium(medium) {
	let art = document.getElementsByClassName("tile");
	for (var i = 0; i < art.length; i++){
		art[i].classList.remove("hide");
		if (art[i].className.indexOf(medium) < 0 && medium !== "all"){
			art[i].classList.add("hide");
		}
	}
	changeButtons(medium);
}

function changeButtons(medium){
	var newButton = document.getElementById(medium);
	var oldButton = document.getElementsByClassName("display");
	for (var i = 0; i < oldButton.length; i++){
		oldButton[i].classList.remove("display");
	}
	newButton.classList.add("display");
}


//Use 3. Opening modal and navigating slides
var index = 1;
openModals(index);

function nextSlide(n) {
  openModal(index += n);
}

function currentSlide(n) {
  openModal(index = n);
}

function openModal(n) {
	document.getElementById("modal").style.display = "block";
	
	var slides = document.getElementsByClassName("slide");

	if (n > slides.length) {
		index = 1;
	}
	else if (n < 1) {
		index = slides.length;
	}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[index-1].style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}