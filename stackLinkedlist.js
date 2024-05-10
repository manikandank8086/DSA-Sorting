

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Stack{
    constructor() {
        this.top=null
        this.size=0
    }
    push(element){
        const NewNode=new Node(element)
        NewNode.next=this.top
        this.top=NewNode
        this.size++
    }

    pop(){
        const popValue=this.top.data
        this.top=this.top.next
        this.size--
        return popValue
    }

    print()
{
    let current= this.top
    while(current){
        console.log(current.data)
        current=current.next
    }
}}


const stack = new Stack()
stack.push(3)
stack.push(4)
stack.push(5)
console.log('stack value is '+stack.pop())
stack.print()