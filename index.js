let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  let zlotyElement = document.querySelector(".js-zloty").value;
  let euroElement = document.querySelector(".js-euro").value;

  let result = zlotyElement * euroElement;

  resultElement.innerText = `${result.toFixed(2)} zl`;
});
