$(document).ready(function(){
	formatHtml();
	formatCss(1);


	function formatCss(version){
		var fileName = ['normal.css', 'sideBar.css', 'topBar.css'];

		let cssLink = "./css/" + fileName[version];
		$('link[href$=".css"]').prop('href', cssLink);
	}

	function formatHtml(){
		let header =
		`<h1>
			<div>CGriffith Art</div>
			<img src="./img/stroke.png" alt="stroke" height="150" width="250">
		</h1>
		<nav>
			<a href="index.html">home</a>
			<a href="about.html">about</a>
			<a href="gallery.html">gallery</a>
			<a href="projects.html">projects</a>
			<a href="contact.html">contact</a>
		</nav>
		<br>
		Instagram: <a href="https://www.instagram.com/c.griffith.art/?r=nametag">c.griffith.art</a>
		<br>`;

		let footer = `
		<pre>



		</pre>
		&copy; 2019 Cameron Griffith. All Rights Reserved.`

		$("header").html(header);
		$("footer").html(footer);
	}
});