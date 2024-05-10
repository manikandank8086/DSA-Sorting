

// function selectionSort(array){

// for(let i =0;i< array.length-1;i++){
//     let minIndex=i
//     for(let j =i+1;j<array.length;j++){
//     if(array[j]<array[minIndex]){
//         minIndex=j
//     }
//     }
//     if(minIndex !==i){
//         let temp=array[i]
//         array[i]=array[minIndex]
//         array[minIndex]=temp
//     }
// }
// return array
// }

// const array = [2,3,1,4,6,5]
// const result= selectionSort(array)
// console.log(result)

// function selectionSort(arr){
//     for(let i =0 ;i < arr.length;i++){
//         let minIndex= i 
//         for(let j = i+1 ; j < arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex= j
//             }
//         }
//         if(minIndex != i){
//             let temp = arr[i]
//             arr[i]=arr[minIndex]
//             arr[minIndex]= temp
//         }
//     }
//     return arr
// }
// const arr=[5,4,3,2,1]
// const result = selectionSort(arr)
// console.log(result)


//  function selectionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let minIndex= i
//         for(let j =i+1 ; j< arr.length;j++){
//             if(arr[j]>arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         let temp = arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//     return arr
//  }

//  const array=[3,1,5,2,4,6]
//  const result = selectionSort(array)
//  console.log(result)


// function selectionSort(arr){
// for(let i =0 ; i< arr.length;i++){
//     let minIndex = i
//     for(let j = i+1 ;j<arr.length;j++){
//         if(arr[j]<arr[minIndex]){
//             minIndex = j
//         }
//     }
//     let temp = arr[i]
//     arr[i]=arr[minIndex]
//     arr[minIndex]=temp
// }
// return arr
// }
// const array=[5,3,6,2]
// const result = selectionSort(array)
// console.log(result)


// function selectionSort(arr){
//     for( let i = 0; i<arr.length;i++){
//         let minIndex = i
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 minIndex=j
//             }
//         }
//         let temp = arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//     return arr
// }
//  const array=[5,3,6,2]
//  const result = selectionSort(array)
// console.log(result)


// function selectionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let minIndex=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j
//             }
//         }
//         let temp=arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//     return arr
// }

// const array=[3,5,1,2]
// console.log(selectionSort(array))


// function selectionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let minIndex=i
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j
//             }
//         }
//         let temp=arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//    return arr
// }

// const array = [2,4,1,5,3]
// console.log(selectionSort(array))


// function selectionSort(arr){
//     for( let i =0;i<arr.length;i++){
//         let minIndex=i
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j
//             }
//         }
//         let temp = arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//     return arr
// }
// const arrr=[4,2,6,82,1]
// console.log(selectionSort(arrr))



// function selectionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let minIndex=i
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j
//             }
//         }
//         let temp = arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//     return arr
// }

// const array=[4,1,5,6]
// console.log(selectionSort(array))



// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivotIndex=arr.length-1
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

// const array=[4,5,6,2,1]
// console.log(quickSort(array))


// function selectionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let minIndex=i
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[minIndex]<arr[j]){
//                 minIndex=j
//             }
//         }
//         let temp=arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
//     return arr
// }

// const array=[3,2,4,1]
// console.log(selectionSort(array))

// function insertionSort(arr){
//     for(let i =1;i<arr.length;i++){
//         let j = i-1
//         let current=arr[i]
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }return arr
// }

// const array=[3,2,4,6]
// console.log(insertionSort(array))


function selectionSort(arr){
    for(let i =0;i<arr.length;i++){
        let minIndex=i
        for(let j = i+1;j<arr.length;j++){
            if(arr[minIndex]<arr[j]){
                  minIndex=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }return arr
}

const array = [3,5,2,5,1]
console.log(selectionSort(array))