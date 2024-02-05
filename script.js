const button = document.getElementsByTagName("button");

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});
