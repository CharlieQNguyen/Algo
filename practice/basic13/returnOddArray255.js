function returnOddArray255() {
    let arr = []
    for(let i = 1; i <= 255; i++) {
        if(i % 2 !== 0) {
            arr.push(i)
        }
    }
    console.log(arr)
}

returnOddArray255();