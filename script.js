let heading = document.querySelector("h1");
console.log(heading);

heading.style.textDecoration = "underline";

let heading2 = document.querySelector("h2");
console.log(heading2);

heading2.style.textAlign = "center";
heading2.style.innerHTML += " Here are  <br><br><br>";

let img = document.getElementById("#starters_image_div");

for (i = 0; i < img.length; i++) {
img[i].style.border = ("10px dotted orange")
}