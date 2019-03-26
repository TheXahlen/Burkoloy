function ScriptsLoad() {
function createDiv(text) {
  var div = document.createElement("script");
  div.src = (text);
  return div;
}
var divs = [
  createDiv("https://xplosivex.github.io/Burkoloy/Resources/Scripts/Dropdown.js"),
  createDiv("https://xplosivex.github.io/Burkoloy/Resources/Scripts/ChapterSelect.js"),
  createDiv("https://xplosivex.github.io/Burkoloy/Resources/Scripts/Dynamic.js"),
  createDiv("https://xplosivex.github.io/Burkoloy/Resources/Scripts/TextSizer.js"),
  createDiv("https://xplosivex.github.io/Burkoloy/Resources/Scripts/AntiCopy.js")
];

var docFrag = document.createDocumentFragment();
for(var i = 0; i < divs.length; i++) {
  docFrag.appendChild(divs[i]); 
}

document.body.appendChild(docFrag); 
}
