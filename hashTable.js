
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