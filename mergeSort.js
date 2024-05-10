


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