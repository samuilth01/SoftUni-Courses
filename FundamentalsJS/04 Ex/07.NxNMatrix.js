function NxNMatrix (n) {
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(n);
        }
        
        console.log(arr.join(' '));
    }
}

NxNMatrix (7);