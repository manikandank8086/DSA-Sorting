


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