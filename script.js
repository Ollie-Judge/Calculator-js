const button = document.getElementsByTagName("button");

const numberButtons = document.querySelectorAll("[data-number]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});
