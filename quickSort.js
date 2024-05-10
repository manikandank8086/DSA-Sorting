// function quickSort(arr){
//     if(arr.length<=1){
//       return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left=[]
//     let right=[]

//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const array=[2,4,1,5]
// const result = quickSort(array)
// console.log(result)



// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivotIndex = arr.length-1
//     let pivot=arr[pivotIndex]
//     console.log(pivot)
//     let left =[]
//     let right=[]
//     for( let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const array=[4,23,5,1]
// const result = quickSort(array)
// console.log( "array is "+result)


// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivotIndex=arr.length-1
//     let pivot = arr[pivotIndex]
//     let left = []
//     let right=[]

//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }


// const array=[3,5,1,3]
// const result=quickSort(array)
// console.log(result)



// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pivotIndex= arr.length-1
//     let pivot=arr[pivotIndex]
//     let left=[]
//     let right=[]

//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const array=[3,5,2,1]
// console.log(quickSort(array))


// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
    
//     let pivotIndex=arr.length-1
//     let pivot=arr[pivotIndex]
//     let left=[]
//     let right=[]


//     for( let i =0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const arrary = [ 4,3,2,4,2]
// console.log(quickSort(arrary))


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