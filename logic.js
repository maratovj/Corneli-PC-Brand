let str = 'Hello123';
let arr = []

for (let a = 0; a < str.length; a++) {
    if (!isNaN(str[a])) {
        arr.push(str[a])
    }
    console.log(arr)
}

