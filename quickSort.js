


function quickSort(arr){
    if(arr.length<=1){
        return arr
    }

    let pivotIndex=arr.length-1
    let pivot=arr[pivotIndex]
    let left=[]
    let right=[]

    for(let i =0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const array=[4,3,5,2]
console.log(quickSort(array))