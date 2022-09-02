// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

// odd, I feel like Java would have so many issues with this, as it would run into a memory issue. I guess JS doesn't as it ends up just returning undefined rather than a memory leak error.

for(i = 0; i < array.length; i++) {
    let x = array[i]
    for(q = i + 1; q < array.length; q++) {
        if(array[i] + array[q] === 0) {
            console.log(array[i],array[q])
            console.log(true)
        }
    }
}