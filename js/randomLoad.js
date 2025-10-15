const SVGElements = document.querySelectorAll("g:not(.tooltip)");

let SVGAmount = 7;

let num;

for (i = 0; i < SVGElements.length; i++) {
  SVGElements[i].style.display = "none";
}

for (i = 0; i < SVGAmount; i++) {
  num = Math.floor(Math.random() * SVGElements.length);
  SVGElements[num].style.display = "block";
}
