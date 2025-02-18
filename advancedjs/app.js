let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clciked!");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);
// 괄호 추가하면 브라우저가 이 코드를 읽는 즉시 실행시켜서 바귀게 될것임
// 하지만 괄호를 뺴면 클릭이벤트가 발생했을때 실행 시킬 수 있음

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let eneteredText = event.target.value;
  // let enteredText = event.data; => This is different
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
