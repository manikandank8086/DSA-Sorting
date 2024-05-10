
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