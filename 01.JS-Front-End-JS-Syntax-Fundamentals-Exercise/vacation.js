function ticketPrices(groupOfPeople, typeOfGroup, dayOfWeek) {
    let singleTicketPrice = 0;
    switch (dayOfWeek) {
        case "Friday": 
        switch (typeOfGroup) {
            case "Students": singleTicketPrice = 8.45; break;
            case "Business": singleTicketPrice = 10.90; break;
            case "Regular": singleTicketPrice = 15; break;
        }
        break;
        case "Saturday": 
        switch (typeOfGroup) {
            case "Students": singleTicketPrice = 9.80; break;
            case "Business": singleTicketPrice = 15.60; break;
            case "Regular": singleTicketPrice = 20; break;
        }
        break;
        case "Sunday": 
        switch (typeOfGroup) {
            case "Students": singleTicketPrice = 10.46; break;
            case "Business": singleTicketPrice = 16; break;
            case "Regular": singleTicketPrice = 22.50; break;
        }
        break;
    }

    let totalPrice = groupOfPeople * singleTicketPrice

    switch (typeOfGroup) {
        case "Students": if (groupOfPeople >= 30) {
            totalPrice *= 0.85
        };
        break;
        case "Business": if (groupOfPeople >= 100) {
            totalPrice -= singleTicketPrice * 10
        };
        break;
        case "Regular": if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            totalPrice *= 0.95
        }; 
        break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

ticketPrices(30,
    "Students",
    "Sunday")

ticketPrices(40,
    "Regular",
    "Saturday")