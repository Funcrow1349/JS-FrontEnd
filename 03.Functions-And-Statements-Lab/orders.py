def calculate_total_price(order, quantity):
    prices = {
        'coffee': 1.5,
        'water': 1,
        'coke': 1.4,
        'snacks': 2,
    }

    result = prices[order] * quantity
    print(f'{result:.2f}')

calculate_total_price('water', 5)
calculate_total_price('coffee', 2)
