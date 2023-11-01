def calculate_expenses(lost_fights, helmet_price, sword_price, shield_price, armor_price):
    total_cost = 0
    shield_broken = 0

    for i in range(1, lost_fights + 1):
        if i % 2 == 0 and i % 3 == 0:
            total_cost += helmet_price + sword_price + shield_price
            shield_broken += 1
            if shield_broken % 2 == 0:
                total_cost += armor_price

        elif i % 2 == 0:
            total_cost += helmet_price
        elif i % 3 == 0:
            total_cost += sword_price
    
    print(f"Gladiator expenses: {total_cost:.2f} aureus")

calculate_expenses(23, 12.50, 21.50, 40, 200)