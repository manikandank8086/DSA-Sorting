// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next=null
// //     }
// // }

// // class Stack{
// //     constructor() {
// //         this.top=null
// //         this.size=0
// //     }

// //     push(value){
// //         const NewNode= new Node(value)
// //          NewNode.next=this.top
// //          this.top=NewNode
// //          this.size++
// //     }

// //     pop(){
// //         if(!this.top){
// //             return null
// //         }else{
// //             const popValue = this.top.data
// //              this.top=this.top.next
// //              this.size--
// //         }
// //         return popValue
// //     }

// //     peek(){
// //         if( !this.top){
// //             return null
// //         }else{
// //             return this.top.data
// //         }
// //     }

// //     print(){
// //         console.log('')
// //         let current=this.top
// //         while(current){
// //             console.log(current.data)
// //             current=current.next
// //         }
// //     }

// // }


// // const stak= new Stack()
// // stak.push(1)
// // stak.push(2)
// // stak.push(3)
// // stak.push(4)

// // stak.print()
// // console.log('peek'+stak.peek())



// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next=null
// //     }
// // }

// // class Stack{
// //     constructor() {
// //         this.top=null
// //         this.size=0
// //     }

// //     push(value){
// //         const NewNode = new Node(value)
// //         NewNode.next=this.top
// //         this.top=NewNode
// //         this.size++
// //     }

// //     pop(){
// //         const popValue=this.top.data
// //         this.top=this.top.next
// //         this.size--
// //     }
// //     print(){
// //         let current = this.top
// //         while(current){
// //             console.log(current.data)
// //             current=current.next
// //         }
// //     }
// //     peek(){
// //         if(!this.top){
// //             return null
// //         }else{
// //            return this.top.data
// //         }
        
// //     }
// // }

// // const stack=new Stack()
// // stack.push(3)
// // stack.push(5)
// // stack.push(7)
// // stack.push(9)
// // stack.print()
// // console.log('after remove')
// // stack.pop()
// // stack.print()



// // 



// class Node{
//     constructor(data){
//         this.data = data
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }
//     push(element){
//         const NewNode=new Node(element)
//         NewNode.next=this.top
//         this.top=NewNode
//         this.size++
//     }
//     pop(){
//         const popValue=this.top.data
//         this.top=this.top.next
//         this.size--
//         return popValue
//     }

//     print(){
//         let current= this.top
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }

// const stack = new Stack()
// stack.push(2)
// stack.push(4)
// stack.push(5)
// stack.print()
// console.log('popValue is'+ stack.pop())

// stack.print()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }
//     push(value){
//         const NewNode=new Node(value)
//         NewNode.next=this.top
//         this.top=NewNode
//         this.size++
//     }
//     pop(){
//         if(!this.top){
//             return null
//         }
//         const popValue=this.top.data
//         this.top=this.top.next
//         this.size--
//         return popValue
//     }

//     print(){
//         let current=this.top
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }

// const stack=new Stack()
// stack.push(19)
// stack.push(32)
// stack.push(76)
// stack.print()
// console.log('popValue is '+ stack.pop())
// stack.print()


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