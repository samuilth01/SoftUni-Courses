function meetings(input) {
    let result = {};
    
    for (let meeting of input) {
        let [day, person] = meeting.split(' ');
        let isScheduled = result.hasOwnProperty(day);
        if (isScheduled == false) {
            result[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let day in result) {
        console.log(`${day} -> ${result[day]}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);