let productNameInputElement = document.querySelector("input");
let remainingCharsElement = document.getElementById("remaining-chars");
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = productNameInputElement.value;
  // let enteredText = event.target.value;
  // let remainingCharacters = 60 - enteredText.length;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
