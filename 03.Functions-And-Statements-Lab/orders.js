function calculateTotalPrice(order, quantity) {
    const prices = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    }

    console.log((prices[order] * quantity).toFixed(2))
}

calculateTotalPrice("water", 5)
calculateTotalPrice("coffee", 2)