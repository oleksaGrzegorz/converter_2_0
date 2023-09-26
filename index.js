let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

const exchangeRates = {
  euro: 4.61,
  dollar: 4.36,
  peso: 0.25,
  frank: 4.76,
};

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  let zlotyElement = document.querySelector(".js-zloty").value;
  let selectElement = document.querySelector(".form__select").value;

  let result = 0;

  switch (selectElement) {
    case "euro":
      result = zlotyElement / exchangeRates.euro;
      resultElement.innerText = `${result.toFixed(2)} EUR`;
      break;
    case "dollar":
      result = zlotyElement / exchangeRates.dollar;
      resultElement.innerText = `${result.toFixed(2)} USD`;
      break;
    case "peso":
      result = zlotyElement / exchangeRates.peso;
      resultElement.innerText = `${result.toFixed(2)} PESO`;
      break;
    case "frank":
      result = zlotyElement / exchangeRates.frank;
      resultElement.innerText = `${result.toFixed(2)} CHF`;
      break;

    default:
      resultElement.innerText = "Nieznana waluta";
  }
});
