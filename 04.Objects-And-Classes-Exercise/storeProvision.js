function storeProvision(stock, orders) {
    let store = {}

    for (let index = 0; index < stock.length; index += 2) {
        const product = stock[index];
        const quantity = stock[index + 1]

        if (!store.hasOwnProperty(product)) {
            store[product] = Number(quantity)
        } else {
            store[product] += Number(quantity)
        }
    }

    for (let index = 0; index < orders.length; index += 2) {
        const product = orders[index];
        const quantity = orders[index + 1]

        if (!store.hasOwnProperty(product)) {
            store[product] = Number(quantity)
        } else {
            store[product] += Number(quantity)
        }
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )