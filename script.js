const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
  buttons.forEach((item) => {
   
    item.onclick = () => {
      if (item.classList.contains("btn-operator") && !display.innerText.match(/\d/)) {
        display.innerText = "Enter a number first";
        setTimeout(() => (display.innerText = ""), 1000);
        return;
      }
      if (item.id == "clear") {
        display.innerText = "";
      } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else {
          display.innerText += item.id;
      }
    };
  });



const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".moonIcon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};




document.onselectstart = function() {
  return false;
  }



const gradients = [
  'linear-gradient(to right top, #2a6fd6, #0096f0, #00b5e5, #00cfbd, #24e387)',
  'linear-gradient(to right top, #f9f941, #ffd417, #ffae00, #ff8600, #f65c19)',
  'linear-gradient(to right top, #32eb39, #80ec1a, #b1ec00, #daeb00, #ffe800)',
  'linear-gradient(to right top, #eb8232, #f79a28, #feb31a, #ffcd08, #ffe800)',
  'linear-gradient(to right top, #007428, #008e4e, #00a974, #00c59b, #10e0c4)',
  'linear-gradient(to right top, #073b3d, #004e6e, #0058a3, #7e4db8, #e01098)',
  'linear-gradient(to right top, #15cf45, #00c44f, #00ba57, #00af5c, #08a460)'
];
let counter = 0;
setInterval(() => {
  const body = document.querySelector('body');
  body.style.backgroundImage = gradients[counter];
  counter++;
  if (counter >= gradients.length) {
    counter = 0;
  }
}, 5000); 



