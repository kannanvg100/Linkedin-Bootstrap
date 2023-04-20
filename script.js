var splashScreen = document.getElementById("splash-screen");
var msgExpandButton = document.getElementById("messaging-window-expand");
var msgWindow = document.getElementById("messaging-window");
var inputSearch = document.getElementById("input-search");
var searchSuggestions = document.getElementById("search-suggestions");

window.addEventListener("load", startAnimation);
msgExpandButton.addEventListener("click", toogleMessagingWindow);
inputSearch.addEventListener("focusout", hideSuggestions);
inputSearch.addEventListener("focusin", showSuggestions);

function startAnimation() {
	setInterval(hideSplashScreen, 500);
}

function hideSplashScreen() {
	splashScreen.style.display = "none";
}

function toogleMessagingWindow() {
	const bottamValue = getComputedStyle(msgWindow).bottom;
	console.log(bottamValue);
	if (bottamValue != "0px") {
		msgExpandButton.style.transform = "rotate(180deg)";
		msgWindow.style.bottom = "0";
	} else {
		msgExpandButton.style.transform = "rotate(0deg)";
		msgWindow.style.bottom = "-265px";
	}
}

function hideSuggestions() {
	searchSuggestions.style.display = "none";
}

function showSuggestions() {
	searchSuggestions.style.display = "block";
}
