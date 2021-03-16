class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value){
        let n=new Node(value)
        if(this.first==null){
            this.first=n
            this.last=n
        }
        else{
            this.last.next=n
            this.last=n
        }
        this.length++
    }
    dequeue(){
        if(this.first===this.last){
            this.last=null
            this.first=this.first.next
        }
        if(this.first!=null){
            this.first=this.first.next
        }
        this.length--
    }
    //isEmpty;
  }

  
  const myQueue = new Queue();
  
  myQueue.enqueue('Joy')
  myQueue.enqueue('Matt')
  myQueue.enqueue('Pavel')
  myQueue.enqueue('Samir')
  console.log(myQueue)
  myQueue.dequeue()
  console.log(myQueue)
  myQueue.dequeue()
  console.log(myQueue)
  myQueue.dequeue()
  console.log(myQueue)
  myQueue.dequeue()
  console.log(myQueue)
  //Joy
  //Matt
  //Pavel
  //Samir
  
  