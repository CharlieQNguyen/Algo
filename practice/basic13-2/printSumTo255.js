function printSumTo255() {
    let sum = 0;
    for(let i = 0; i <= 255; i++) {
        sum += i;
        console.log(i+ " : "+sum)
    }
}

printSumTo255();