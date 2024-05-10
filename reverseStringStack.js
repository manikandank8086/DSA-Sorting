


class Stack{
    constructor() {
         this.items=[]
         this.size=0
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length===0
    }
}

function reverse(str){
    let stack = new Stack()
    for(let i =0;i<str.length;i++){
         stack.push(str[i])
    }
    let reversedResult = ''
    while(!stack.isEmpty()){
        reversedResult+=stack.pop()
    }
    return reversedResult
}

const value = 'manu'
console.log(reverse(value))