// class HashTable {
//     constructor(size){
//         this.size=size
//         this.buckets= new Array(size).fill(null).map(()=>[])
//     }
//     _hash(key){
//         let hash=0
//         for(let i =0;i<key.length;i++){
//             hash+=key.charCodeAt(i)
//         }
//         return hash % this.size
//     }

const { shallowCopy } = require("ejs/lib/utils")

//     set(key,value){
//         let index=this._hash(key)
//         let bucket=this.buckets[index]
//         for(let i =0 ;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]=value
//             }
//         }

//         bucket.push([key,value])
//     }

//     get(key){
//         let index = this._hash(key)
//         let bucket=this.buckets[index]
//         for(let i =0; i< bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]
//             }
//         }
//         return null
//     }

//     keys(){
//         let keysArray=[]
//         for(let i =0;i<this.buckets.length;i++){
//             if(this.buckets[i]){
//                 for(let j =0 ; j<this.buckets[i].length;j++){
//                     keysArray.push(this.buckets[i][j][0])
//                 }
//             }
//         }
//         return keysArray
//     }
//     delete(key){
//        let index=this._hash(key)
//         let bucket=this.buckets[index]
//         for(let i =0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket.splice(i,1)
//             }
//         }
//     }
// }


// const hashTable= new HashTable(10)
// hashTable.set('manu',11)
// hashTable.set('nixon',12)
// hashTable.set('nandu',14)

// console.log(hashTable.get('manu'))
// console.log(hashTable.get('nandu'))

// console.log(hashTable.keys())

// hashTable.delete('nandu')
// console.log(hashTable.keys())




// class HashTable{
//     constructor(size){
//         this.size=size
//         this.buckts=new Array(size).fill(null).map(()=>[])
//     }

//     _hash(key){
//         let hash = 0
//         for( let i =0;i<key.length;i++){
//             hash+=key.charCodeAt(i)
//         }
//         return hash % this.size
//     }

//     set(key,value){
//         let index=this._hash(key)
//         let bucket=this.buckts[index]
//         for(let i =0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]
//             }
//         }
//         bucket.push([key,value])
//     }

//     get(key){
//         let index=this._hash(key)
//         let bucket=this.buckts[index]
//         for(let i =0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]
//             }
//         }
//         return null
//     }

//     key(){
//         let keys=[]
//         for(let i =0;i<this.buckts.length;i++){
//             if(this.buckts[i]){
//                 for(let j =0;j<this.buckts[i].length;j++){
//                     keys.push(this.buckts[i][j][0])
//                 }
//             }
//         }
//         return keys
//     }
    
// 


// const hashTable= new HashTable(10)
// hashTable.set('manu',1)
// hashTable.set('anirudh',2)
// hashTable.set('amru',3)



// console.log(hashTable.key())



// class HashTable {
//     constructor(size){
//         this.size=size
//         this.buckets=new Array(size).fill(null).map(()=>[])
//     }

//     _hash(key){
//         let hash=0
//         for(let i =0;i<key.length;i++){
//             hash+=key.charCodeAt(i)
//         }
//         return hash%this.size
//     }

//     set(key,value){
//         let index=this._hash(key)
//         let bucket=this.buckets[index]
//         for(let i =0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]=value
//             }
//         }
//         bucket.push([key,value])
//     }

//     get(key){
//         let index = this._hash(key)
//         let bucket=this.buckets[index]
//         for(let i =0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]
//             }
//         }
//         return null
//     }

//     keys(){
//         let keys=[]
//         for(let i =0;i<this.buckets.length;i++){
//             if(this.buckets[i]){
//                 for(let j =0;j<this.buckets[i].length;j++){
//                     keys.push(this.buckets[i][j][0])
//                 }
//             }
//         }
//         return keys
//     }
//     delete(key){
//         let index=this._hash(key)
//         let  bucket=this.buckets[index]
//         for(let i =0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 bucket.splice(i,1)
//                 return
//             }
//         }
//     }
// }

// const hashTable=new HashTable(10)
// hashTable.set('manu',2)
// hashTable.set('iphone',4)
// hashTable.set('oppo',5)
// hashTable.set('oppo',8)
// console.log('')
// console.log(hashTable.get('oppo'))
// console.log('')
// console.log(hashTable.keys())
// hashTable.delete('iphone')
// console.log('after delete')
// console.log(hashTable.keys())


class HashTable{
    constructor(size){
        this.size=size
        this.buckets=new Array(size).fill(null).map(()=>[])
    }

    _hash(key){
        let hash=0
        for(let i =0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash%this.size
    }

    set(key,value){
        let index=this._hash(key)
        let bucket=this.buckets[index]
        for(let i =0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket[i][1]=value
                return
            }
        }
        bucket.push([key,value])
    }

    get(key){
        let index=this._hash(key)
        let bucket=this.buckets[index]
        for(let i =0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1]
            }
        }
        return null
    }

    keys(){
        let keys=[]
        for(let i =0;i<this.buckets.length;i++){
            if(this.buckets[i]){
                for(let j=0;j<this.buckets[i].length;i++){
                    keys.push(this.buckets[i][j][0])
                }
            }
        }
        return keys
    }
}


const hash=new HashTable(10)
hash.set('manu',2)
hash.set('mina',5)
hash.set('water',8)
console.log(hash.get('mina'))
console.log(hash.keys())