// class Stack{
//     constructor() {
//         this.items=[]
//     }

//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//        return  this.items.pop()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
// }

//       function reverseString(str){
//         const stack = new Stack()
//         console.log("stack is "+stack)

//         for(let i =0;i<str.length;i++){
//             stack.push(str[i])
//         }
//         let reversedString = ''

//         while(!stack.isEmpty()){
//         reversedString += stack.pop()
//     }
//     return reversedString
// }

// const str='hallo'
// console.log(reverseString(str))


// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
// }

// function reverString(str){
//     let stack = new Stack()
//     for(let i =0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     let reversedString=''
//     while(!stack.isEmpty()){
//         reversedString+=stack.pop()
//     }
//     return reversedString
// }

// const str='haloo'
// console.log(reverString(str))



// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
// }

// function ReverSedString(str){
//     let stack = new Stack()
//     for( let i =0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     let reversedString=''
//     while(!stack.isEmpty()){
//         reversedString+=stack.pop()
//     }
//     return reversedString
// }

// const str='manu'
// console.log(ReverSedString(str))


// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
        
//         return this.items.pop()
//     }

//     isEmpty(){
//         return this.items.length==0
//     }
// }

// function reverseString(str){
//     let stack =  new Stack()
//     for( let i =0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     let reversedString=''
//     while(!stack.isEmpty()){
//         reversedString+=stack.pop()
//     }
//     return reversedString
// }

// const str='manu'
// console.log(reverseString(str))


// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
// }

// function reverse(str){
//     const stack=new Stack()
//     for(let i =0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     let reversesValue =''
//     while(!stack.isEmpty()){
//         reversesValue+=stack.pop()
//     }
//     return reversesValue
// }

// const value = 'manu'
// console.log(reverse(value))


// class Node{
//     constructor(data) {
//          this.data = data
//          this.next=null
//     }
// }

// class Stack{
//     constructor() {
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
//         const popValue = this.top.data
//         this.top=this.top.next
//         this.size--
//         return popValue
//     }

//     peek(){
//         if(!this.top){
//             return null
//         }
//         return this.top.data
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
// stack.push(2)
// stack.push(6)
// stack.push(8)
// stack.print()

// console.log('')
// console.log(stack.pop())
// console.log('')
// stack.print()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class Queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//         this.size=0
//     }

//     enqueue(element){
//         const NewNode= new Node(element)
//           if(!this.front){
//             this.front=NewNode
//             this.rear=NewNode
//           }else{
//             this.rear.next=NewNode
//             this.rear=NewNode
//             this.size++
//           }
//     }
//     dequew(){
//         const dequeValue=this.front.data
//         if(!this.front){
//             return null;
//         }
//         this.front.next=this.front
//         this.size--

//         return dequeValue
//     }
//     print(){
//         let current=this.front
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }

// const queue=new Queue()
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(7)
// queue.print()
// console.log(queue.dequew())


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