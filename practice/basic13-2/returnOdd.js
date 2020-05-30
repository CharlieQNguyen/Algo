function oddsNewArr() {
    newArr = [];
    for(let i = 1; i <= 255; i++) {
        if(i % 2 !== 0) {
            newArr.push(i)
        }
    }
    return console.log(newArr)
}

oddsNewArr()