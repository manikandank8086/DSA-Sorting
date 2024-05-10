// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.buckets = new Array(size).fill(null).map(() => []);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
        
//         }
//         return hash % this.size;
//     }

//     set(key, value) {
//         const index = this._hash(key);
//         const bucket = this.buckets[index];
//         if(!bucket){
//             bucket=[]
//             this.buckets[index]=bucket
//         }
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 bucket[i][1] = value;
//                 return;
//             }
//         }
//         bucket.push([key, value]);
//     }

//     get(key) {
//         const index = this._hash(key);
//         const bucket = this.buckets[index];
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 return bucket[i][1];
//             }
//         }
//         return null;
//     }

//     delete(key) {
//         const index = this._hash(key);
//         const bucket = this.buckets[index];
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 bucket.splice(i, 1);
//                 return;
//             }
//         }
//     }

//     keys() {
//         let keysArray = [];
//         for (let i = 0; i < this.buckets.length; i++) {
//             if (this.buckets[i]) {
//                 for (let j = 0; j < this.buckets[i].length; j++) {
                    
//                     keysArray.push(this.buckets[i][j][0]);
//                 }
//             }
//         }
//         return keysArray;
//     }
// }

// // Example usage:
// const hashTable = new HashTable(10);
// hashTable.set("apple", 10);
// hashTable.set("banana", 20);
// hashTable.set("orange", 30);

// console.log(hashTable.get("apple")); //Output: 10
// console.log(hashTable.get("banana")); // Output: 20
// console.log(hashTable.get("orange")); // Output: 30

// console.log(hashTable.keys()); 

// hashTable.delete("banana");
// console.log(hashTable.keys()); 


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
        return hash % this.size
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
                for(let j =0;j<this.buckets[i].length;i++){
                    keys.push({key: this.buckets[i][j][0],value:this.buckets[i][j][1]})
                }
            }
        }
        return keys
    }

    delete(key){
        let index=this._hash(key)
        let bucket=this.buckets[index]
        for(let i =0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket.splice(i,1)
                return
            }
        }
    }
}

const hash=new HashTable(10)
hash.set('manu',10)
hash.set('hilly',20)
hash.set('aoua',30)
hash.delete('hilly')
console.log(hash.keys())