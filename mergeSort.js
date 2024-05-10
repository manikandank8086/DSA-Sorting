// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let middle=arr.length/2
//     let leftHalf=arr.slice(0,middle)
//     let rightHalf=arr.splice(middle)
    
//     const sortedLeft= mergeSort(leftHalf)
//     const sortedRight=mergeSort(rightHalf)
    
//     return merge(sortedLeft,sortedRight)
// }

// function merge(left,right){
//     let result=[]
//     let leftIndex=0
//     let rightIndex=0

//       while(leftIndex<left.length && rightIndex<right.length){
//           if(left[leftIndex]<right[rightIndex]){
//               result.push(left[leftIndex])
//               leftIndex++
//           }else{
//             result.push(right[rightIndex])
//             rightIndex++
//           }
//       }

//       while(leftIndex<left.length){
//         result.push(left[leftIndex])
//         leftIndex++
//       }

//       while(rightIndex<right.length){
//         result.push(right[rightIndex])
//         rightIndex++
//       }

//       return result
// }

// const array =[3,5,1,5,7,3,8,9]
// console.log(mergeSort(array))



// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let leftHalf=arr.slice(0,middle)
//     let rightHalf=arr.slice(middle)

//     const sortedLeft=mergeSort(leftHalf)
//     const sortedRight=mergeSort(rightHalf)

//     return merge(sortedLeft,sortedRight)
// }

// function merge(left,right){
//     let result=[]
//     let leftIndex=0
//     let rightIndex=0
//     while(leftIndex<left.length && rightIndex<right.length){
//         if(left[leftIndex]<right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++
//         }else{
//             result.push(right[rightIndex])
//             rightIndex++
//         }
//     }

//     while(leftIndex<left.length){
//         result.push(left[leftIndex])
//         leftIndex++
//     }
//     while(rightIndex<right.length){
//         result.push(right[rightIndex])
//         rightIndex++
//     }
//     return result

// }


// const array = [3,5,6,8,3,7,90]
// console.log(mergeSort(array))




// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let leftHalf=arr.slice(0,middle)
//     let rightHalf=arr.slice(middle)

//     const sortedLeft=mergeSort(leftHalf)
//     const sortedRight=mergeSort(rightHalf)

//     return merge(sortedLeft,sortedRight)
// }

// function merge(left,right){
//     let result=[]
//     let leftIndex=0
//     let rightIndex=0

//     while(leftIndex<left.length && rightIndex<right.length){
//         if(left[leftIndex]>right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++
//         }else{
//             result.push(right[rightIndex])
//             rightIndex++
//         }
//     }

//     while(leftIndex<left.length){
//         result.push(left[leftIndex])
//         leftIndex++
//     }

//     while(rightIndex<right.length){
//         result.push(right[rightIndex])
//         rightIndex++
//     }
//     return result
// }

// const array=[3,4,2,4,1,5,6,7,9,1,3,2]
// console.log(mergeSort(array))


function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
     let middle=Math.floor(arr.length/2)
     let leftHalf=arr.slice(0,middle)
     let rightHalf=arr.slice(middle)

     const sortedLeft=mergeSort(leftHalf)
     const sortedRight=mergeSort(rightHalf)

     return merge(sortedLeft,sortedRight)
}

function merge(left,right){
    let result=[]
    let leftIndex=0
    let rightIndex=0

      while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
      }

      while(leftIndex<left.length){
        result.push(left[leftIndex])
        leftIndex++
      }

      while(rightIndex<right.length){
        result.push(right[rightIndex])
        rightIndex++
      }
      return result
}

const array = [4,3,2,6,7]
console.log(mergeSort(array))