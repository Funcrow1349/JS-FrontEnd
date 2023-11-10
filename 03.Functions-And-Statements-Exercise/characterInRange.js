function listCharacters(firstChar, lastChar) {
  let start = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt())
  let end = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt())
  let finalResult = [];

  for (let i = start + 1; i < end; i++) {
    finalResult.push(String.fromCharCode(i));
  }

  console.log(finalResult.join(" "));
}

listCharacters("a", "d");
listCharacters("#", ":");
listCharacters("C", "#");
