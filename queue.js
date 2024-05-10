 
//  class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
//  }

// class Queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//         this.size=0
//     }

//     enqueue(value){
//         const NewNode = new Node(value)
//           if(!this.front){
//             this.front=NewNode
//             this.rear=NewNode
//           }else{
//             this.rear.next=NewNode
//             this.rear=NewNode
//           }
//           this.size++
//     }
//     dequeue(){
//           if(!this.front){
//             return null
//           }

//           const dequeueValue = this.front.data
//           this.front=this.front.next
//             if(!this.front){
//                 this.rear=null
//             }

//             this.size--
//             return dequeueValue
//     }

//     peek(){
//         if(!this.front){
//             return null
//         }else{
//             return this.front.data
//         }
//     }
//     print(){
//         console.log('values')
//         let current= this.front
         
//          while(current){
//             console.log(current.data)
//             current=current.next
//          }
//     }
// }


// const queue= new Queue()
// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(7)
// queue.print()
// console.log(queue.peek())
// queue.dequeue()
// queue.print()



// class Node{
//     constructor(data){
//         this.data = data 
//         this.next =null
//     }
// }



// class Queue{
//     constructor(){
//         this.front = null
//         this.rear=null
//         this.size=0
//     }
//     enqueue(value){
//         const NewNode=new Node(value)
//         if(!this.front){
//             this.front=NewNode
//             this.rear=NewNode
//         }else{
//             this.rear.next=NewNode
//             this.rear=NewNode
//             this.size++
//         }
//     }

//     dequeue(){
//         if(!this.front){
//             return null
//         }

//         const dequeValue = this.front.data

//         this.front=this.front.next
//         this.size--

//         return dequeValue
//     }
//    prnit(){
//     let current = this.front
//     while(current){
//         console.log(current.data)
//             current=current.next
        
//     }
//    }
// }


// const queue=new Queue()
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(19)
// queue.prnit()

// queue.dequeue()
// queue.prnit()

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }

    enqueue(element){
        const NewNode=new Node(element)
           if(!this.front){
            this.front=NewNode
            this.rear=NewNode
           }else{
            this.rear.next=NewNode
            this.rear=NewNode
            this.size++
           }
    }

    dequeue(){
        const dequeueValue = this.front.data
         if(!this.front){
            return null
         }
         this.front=this.front.next
         this.size--
         return dequeueValue
    }

    peek(){
        if(!this.front){
            return null
        }
        return this.front.data
    }

    print(){
        let current=this.front
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}

const  que= new Queue()
que.enqueue(3)
que.enqueue(2)
que.enqueue(1)
console.log('deque value'+que.dequeue())
que.print()