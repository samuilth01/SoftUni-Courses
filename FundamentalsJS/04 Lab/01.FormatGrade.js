function formatGrade (grade) {
    let formated = grade.toFixed(2);
    let desc;
    if (grade < 3) {
        formated = 2;
        desc = 'Fail';
    } else if (grade < 3.5) {
        desc = 'Poor';
    } else if (grade < 4.5) {
        desc = 'Good';
    } else if (grade < 5.5) {
        desc = 'Very good';
    } else {
        desc = 'Excellent'
    }

    console.log(`${desc} (${formated})`);
}