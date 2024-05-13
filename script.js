let mode = "ninja";

if (mode === "dark"){
  color = "darkSlateBlue";
  image = "/img/dark-icon.png";
  label = "Dark Mode";
}
else if (mode === "light"){
  color = "ghostWhite";
  image = "/img/light-icon.png";
  label = "Light Mode";
}
else {
  color = "dimGray";
  image = "/img/ninja-icon.png";
  label = "Ninja Mode";
}
console.log(label);
console.log(image);