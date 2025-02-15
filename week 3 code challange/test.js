
// ...................................

function domContentLoaded() {
	document.addEventListener("DOMContentLoaded", () => {
		fetch("https://api.npoint.io/b18b73a54ceef13f1103")
			.then((response) => response.json())
			.then(buildList);
	});
}

domContentLoaded();

function buildList(data) {
	let body = document.getElementById("movie_list");
	let list = document.createElement("ul");

	list.textContent = "MOVIES SHOWING";

	data.map((element) => {
		let movieList = document.createElement("li");
		movieList.className = "movies-list";

		movieList.textContent = element.title;

		body.appendChild(list);
		list.appendChild(movieList);


		// Styling
		movieList.style.border = "1px solid black";
		// movieList.style.maxWidth = "200px"
		movieList.style.borderRadius = "5px";
		movieList.style.padding = "10px";
		movieList.style.listStyle = "none";
		movieList.style.margin = "20px";
		movieList.style.fontSize = "10px";
		movieList.style.background = "#000";
		movieList.style.color = "#fff";

		list.style.textAlign = "center";
		list.style.padding = "20px";
		list.style.textAlign = "center";
		list.style.borderRadius = "2px";
		list.style.background = "#333";
		list.style.margin = "20px";
		list.style.fontFamily = "'Chivo Mono', monospace";
		list.style.color = "#6274a5";

		createButton;
	});
}

function createButton() {
	let bod = document.getElementById("main-body");
	let button = document.createElement("button");
	button.id = "btn";
	button.textContent = "Buy Tickets";

	bod.appendChild(button);
}

createButton();

//...................................
