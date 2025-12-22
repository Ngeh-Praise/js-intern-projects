const lightBtn = document.getElementById("lightBtn");
const darkBtn =  document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");
const body = document.body;
const buttons = document.querySelectorAll("button");

lightBtn.addEventListener("click", () => setTheme("light", lightBtn));
darkBtn.addEventListener("click", () => setTheme("dark", darkBtn));
blueBtn.addEventListener("click", () => setTheme("blue", blueBtn));

function setTheme(theme, activeButton){
    body.classList.remove("light", "dark", "blue");
    body.classList.add(theme);
    buttons.forEach(btn => btn.classList.remove("active"));
    activeButton.classList.add("active");
}