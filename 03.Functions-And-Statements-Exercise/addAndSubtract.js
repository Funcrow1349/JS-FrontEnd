function mathematicalOperations(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2
    }

    function subtract(num1, num2, num3) {
        return sum(num1, num2) - num3
    }

    console.log(subtract(num1, num2, num3))
}

mathematicalOperations(23, 6, 10);
mathematicalOperations(1, 17, 30);
mathematicalOperations(42, 58, 100);
