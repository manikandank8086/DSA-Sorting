class Stack{
    constructor(){
        this.items=[]
    }

    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.items.length===0){
            return "empty"
        }
        this.items.pop()
    }
    peek(){
        return this.items.length-1
    }

    print(){
        console.log(this.items)
    }

}

const  stak= new  Stack()

stak.push(10)
stak.push(29)
stak.push(30)
stak.print()

console.log('top element stak' + stak.peek())
stak.pop()
stak.print