function showMenu() {
  var x = document.getElementById("[rel='js-nav-menu']");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}