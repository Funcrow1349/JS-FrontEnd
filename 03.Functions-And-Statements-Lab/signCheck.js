function checkPositive(num1, num2, num3) {
  let positiveNums = 0;
  const nums = [num1, num2, num3];
  for (let num of nums) {
    if (num >= 0) {
      positiveNums += 1;
    }
  }

  if (positiveNums % 2 == 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

checkPositive(5, 12, -15);
checkPositive(-6, -12, 14);
checkPositive(-1, -2, -3);
checkPositive(-5, 1, 1);
