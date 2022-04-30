function requiredReading (countOfPages, pagesPerHour, days) {
    let requiredHours = countOfPages / pagesPerHour;

    let hoursPerDay = requiredHours / days;
    
    console.log(hoursPerDay);
}


requiredReading (212, 20, 2)