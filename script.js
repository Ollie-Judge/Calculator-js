const button = document.getElementsByTagName("button");

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelectorAll("[data-delete]");
const clearButton = document.querySelectorAll("[data-all-clear]");
const equalsButton = document.querySelectorAll("[data-equals]");

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

deleteButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});

equalsButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});
