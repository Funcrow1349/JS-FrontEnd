function solve() {
  let inputText = document.getElementById("text").value;
  let inputTextArray = inputText.toLowerCase().split(" ");
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (currentCase === "Camel Case") {
    const firstWord = inputTextArray.shift();
    result.innerText += firstWord;
    for (const word of inputTextArray) {
      result.innerText += word[0].toUpperCase() + word.slice(1);
    }
  } else if (currentCase === "Pascal Case") {
    for (const word of inputTextArray) {
      result.innerText += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result.innerText = "Error!";
  }
}
