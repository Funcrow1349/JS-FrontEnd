def wash_car(list_of_actions):
    value = 0

    for action in list_of_actions:
        if action == "soap":
            value += 10
        elif action == "water":
            value *= 1.20
        elif action == "vacuum cleaner":
            value *= 1.25
        elif action == "mud":
            value *= 0.90

    print(f"The car is {value:.2f}% clean.")


wash_car(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
wash_car(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])