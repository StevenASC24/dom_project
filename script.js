let body = document.querySelector("body");

body.style.backgroundColor = "darkblue"

let heading = document.querySelector("h1");
console.log(heading);

heading.style.textDecoration = "underline";

let heading2 = document.querySelector("h2");
console.log(heading2);

heading2.style.textAlign = "center";
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

let img = document.querySelectorAll("img");

for (i = 0; i < img.length; i++) {
    img[i].style.border = "5px dotted orange";
}

let allheading3 = document.querySelectorAll("h3");

for (let i = 0; i <allheading3.length; i++) {
    allheading3[i].style.color = "#FDEFA6"
    allheading3[i].innerHTML += "!";
}

let end = document.querySelector("footer");

end.innerHTML = "All Star Code - DOM Project";
end.style.fontSize = "32px"
end.style.textDecoration = "underline overline"