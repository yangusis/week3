function luckyNumbers(n) {
    let arr = []

    if(n < 0) {
        console.log('invalid')
    } else if(n > 10) {
        console.log('too many')
    } else {
        for(i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * 11))
        }
    }

    console.log(arr)
}

luckyNumbers(10)