// there has to be an easier way to check equality for arrays, I know it shouldn't be this much code to check this

function hasUniqueChars(str) {
    let arr = str.split('')
    let test = []
    let ans = false
    let fail = false
    
    for(i = 0; i < arr.length; i++) {
        if(!test.includes(arr[i])) {
            test.push(arr[i])
        }
    }

    for(i = 0; i < arr.length; i++) {
        if(arr[i] === test[i]) {
            ans = true
            console.log(arr[i],test[i])
        } else {
            fail = true
        }
    }

    if(ans === true && fail === false) {
        return true
    } else {
        return false
    }
}

console.log(hasUniqueChars("Alphonse"))