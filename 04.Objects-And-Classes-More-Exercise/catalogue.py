def catalogue(list_of_products):
    list_of_products = sorted(list_of_products)
    list_of_first_letters = []

    for element in list_of_products:
        if element[0] not in list_of_first_letters:
            list_of_first_letters.append(element[0])

    for letter in list_of_first_letters:
        print(letter)

        for element in list_of_products:
            if letter == element[0]:
                product_name, product_price = element.split(" : ")
                print("  " + product_name + ": " + product_price)


catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )