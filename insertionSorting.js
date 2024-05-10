



// function insertionSort(arr){
//     for(let i =1 ;i< arr.length;i++){
//         let j = i -1
//         let current = arr[i]
//         while(j>=0 && arr[j>current]){
//             arr[j+1]= arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }

// const array=[3,2,4,1]
// const result = insertionSort(array)
// console.log(result)



// function insertionSort(arr){
//     for(let i =1;i<arr.length;i++){
//         let j=i-1
//         let current=arr[i]
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }

// const array=[3,4,2,5]
// console.log(insertionSort(array))

 
//  function insertionSort(arr){
//     for(let i =1 ;i<arr.length;i++){
//         let j = i-1
//         let current=arr[i]
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
//  }
//  const array=[3,1,5,2]
//  console.log(insertionSort(array))


function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let j =i-1
        let current=arr[i]
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
    }
    return arr
}

const array=[2,4,1,5]
console.log(insertionSort(array))