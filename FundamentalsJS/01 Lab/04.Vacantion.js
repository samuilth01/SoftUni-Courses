function vacation(number, typeOfGroup, day) {
    let percent = 1;
    let price = 0;
    let totalPrice = 0;

    switch(typeOfGroup) {
        case 'Students':
            if (number >= 30) {
                percent = 0.85;
            }
            break;

            case 'Business':
                if (number >= 100) {
                    number -= 10;
                }
                break;

                case 'Regular':
                    if (number >= 10 && number <=20) {
                        percent = 0.95;
                    }
                    break;
    }

    switch (day) {
        case 'Friday':
            if (typeOfGroup === 'Students') {
                price = 8.45;
            } else if (typeOfGroup === 'Business') {
                price = 10.9;
            } else if (typeOfGroup === 'Regular') {
                price = 15;
            }
            break;

            case 'Saturday':
                if (typeOfGroup === 'Students') {
                    price = 9.80;
                } else if (typeOfGroup === 'Business') {
                    price = 15.6;
                } else if (typeOfGroup === 'Regular') {
                    price = 20;
                }
                break;

                case 'Sunday':
                    if (typeOfGroup === 'Students') {
                        price = 10.46;
                    } else if (typeOfGroup === 'Business') {
                        price = 16;
                    } else if (typeOfGroup === 'Regular') {
                        price = 22.5;
                    }
                    break;
        
    
    }

    totalPrice = number * price * percent;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(2,
    "Regular",
    "Saturday"
)