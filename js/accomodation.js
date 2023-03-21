function Accomodation(month, days) {
    /*  //              PRICES:
       (1): Apartment: May and October (65); June and September (68.70); July and August (77)
       (2): Studio: May and October (50); June and September (75.20); July and August (76);
                  DISCOUNTS: 
       (1) For studio, if he stays more than 7 days, in May and October, (5%)
       (2) For studio, in case of more than 14 days in May and October, (30%)
    */
    //test to validate month and day
    let apartment_price = 77;
    let studio_price = 76;
    let total_studio = 0;
    let total_apartment = 0;
    if (typeof month !== 'string') {
        console.log("please enter a valid month")
        return false
    }
    if (isNaN (days)) {
        console.log("please enter a valid day(s)")
        return false
    }
    let months = ['May', 'June', 'July', 'August', 'September', 'October']
    //testing for months in question
    if (!months.includes(month)) {
        //month does not exist
    console.log('Please enter a valid month')
    }
    console.log('Passed checks')
    if(month === 'May' ||  month ==='October') {
        studio_price = 50;
        apartment_price = 65;
        //total_studio = (days>7)? (days * studio_price)/0.05 : days * studio_price
        //adding the discount or algorithm for discount
        if(days > 7 && days < 14) {
            total_studio = (days* studio_price) - (days* studio_price)*(5/100)
        }
        else if (days >14) {
            total_studio = (days* studio_price) - ((days*studio_price)* 30/100)
        }
        else{
            total_studio = days * studio_price;
        }
    
    }
    else if( month ==='June' || month === 'September') {
        studio_price = 75.20;
        apartment_price = 68.70;
    
    } else {
        //july and August will assume the default price declared
        }
        //
        if (days>14) {
            total_apartment = (days * apartment_price) * ((days * apartment_price)* (10/100))
            }else{ 
                total_apartment = days * apartment_price
            }
            console.log('The total Cost of Apartment is:'+ ' ' + total_apartment)
            console.log('The total Cost of Studio is:'+ ' ' + total_studio) 
    }
    
    
    Accomodation('October', 5)


    