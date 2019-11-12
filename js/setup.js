//Use 1. Formatting each html file with the same header and footer elements, set up css
$(document).ready(function(){
	formatHtml();
	formatCss(1);


	function formatCss(version){
		var fileName = ['normal.css', 'sideBar.css'];

		let cssLink = "./css/" + fileName[version];
		$('link[href$="normal.css"]').prop('href', cssLink);
	}

	function formatHtml(){
		let header =
		`<h1>
			<div class="logo">CGriffith Art</div>
		</h1>
		<nav>
			<a href="index.html">welcome</a>
			<a href="about.html">about</a>
			<a href="gallery.html">gallery</a>
			<a href="contact.html">contact</a>
		</nav>`;

		let footer = `&copy; 2019 Cameron Griffith. All Rights Reserved.`

		$("header").html(header);
		$("footer").html(footer);
	}
});