//stack
//example : broswer history

//Arrays
//arrays will be faster to accees due to all things are store next to the otherone
//Linked List

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top
  
    }
    push(value){
        let add=new Node(value)
        if(this.top==null){
            this.top=add
            this.bottom=add
        }else{
            let p=this.top
            this.top=add
            this.top.next=p
        }
        this.length++
    }
    pop(){
        if (!this.top) {
            return null;
          }
          if (this.top === this.bottom) {
            this.bottom = null;
          }
          const holdingPointer = this.top;
          this.top = this.top.next;
          this.length--;
          return this;
        
    }
    //isEmpty
  }
  
class arrayStack{
    constructor(){
        this.data=[]
    }
    peek(){
        return this.data[this.data.length-1]
    }
    push(value){
        this.data.push(value)
    }
    pop(){
        this.data.pop()
    }
}
let n =new arrayStack
n.push('pussy')
n.push('tit')
n.push('hardfuck')
console.log(n.peek())
n.pop()
console.log(n)

  //Discord
  //Udemy
  //google
  