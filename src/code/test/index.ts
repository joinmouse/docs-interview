const arr = [0, 3, 5, 2, 6, 1];

export function findNum(arr) {
    const newArr:number[] = []
    let res = Infinity
    for(let i =0; i<=arr.length; i++) {
        newArr.push(i)
    }

    for(let i =0; i<arr.length; i++) {
        const ind = newArr.findIndex(item => item === arr[i])
        newArr[ind] = Infinity;
    }

    for(let i =0; i<newArr.length; i++) {
        if(newArr[i] !== Infinity) {
            res = newArr[i]
        }
    }

    return res
}