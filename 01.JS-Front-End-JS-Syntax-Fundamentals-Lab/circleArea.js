function area(argument) {
    let result;
    let inputType = typeof(argument);
    if (inputType === 'number') {
        result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    };
};

area(5);
area('name');