function echoType(input) {
    let type = typeof(input);
    
    if (type == 'string') {
        console.log('string');
        console.log(input);
    } else if (type == 'number') {
        console.log('number');
        console.log(input);
    } else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }
}


echoType(null)