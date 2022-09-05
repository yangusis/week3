function hasPalin(str) {
    let arr = str.split('')
    let test = []
    let ans = false
    let fail = false
    
    for(i = arr.length - 1; i >= 0; i--) {
        test.push(arr[i])
    }

    for(i = 0; i < arr.length; i++) {
        if(arr[i] === test[i]) {
            ans = true
            console.log(arr[i],test[i])
        } else {
            fail = true
        }
    }

    console.log(test,arr)

    if(ans === true && fail === false) {
        return true
    } else {
        return false
    }
}

console.log(hasPalin("racecar"))