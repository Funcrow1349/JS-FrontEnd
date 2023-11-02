def gather_spice(initial_yield):
    yield_amount = initial_yield
    spice_mined = 0
    total_days = 0

    while yield_amount >= 100:
        spice_mined += yield_amount - 26
        total_days += 1
        yield_amount -= 10
    
    if spice_mined >= 26: 
        spice_mined -= 26
    else: 
        spice_mined -= spice_mined

    print(total_days)
    print(spice_mined)

gather_spice(111)
gather_spice(450)