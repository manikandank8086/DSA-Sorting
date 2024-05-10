// const array =[1,2,3,4,5,6,7]
// let temp=0

// for(let i =0;i<array.length;i++){
//     for(let j =i+1;j<array.length;j++){
//         if(array[i]<=array[j]){
//             temp=array[i]
//             array[i]=array[j]
//             array[j]=temp
//         }
//     }
// }

// console.log(array)


// function bubbleSort(arr){
//     let temp=0
//     for(let i =0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 temp = arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }

// const array = [3,2,51]
// console.log(bubbleSort(array))


function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

const array=[3,2,1,5,6]
console.log(bubbleSort(array))