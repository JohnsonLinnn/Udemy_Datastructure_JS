class linkedlist{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1; 
    }
    append(value) {
        this.tail.next={
            value:value,
            next:null
        }
        this.tail=this.tail.next
        this.length++;
    }
    prepend(value){
        let newnode={
            value:value,
            next:this.head
        }
        this.head=newnode
        this.length++;
    }
    insert(index,value){
        let newNode={
            value:value,
            next:null
        }
        if(index>=this.length){
            this.append(value);
        }else if(index==0){
            this.prepend(value);
        }
        else{
            let targertNode=this.traverseToIndex(index-1)
            newNode.next=targertNode.next
            targertNode.next=newNode
            this.length++
        }
        
    }
    remove(index){
        let h=this.traverseToIndex(index-1)
        let r=h.next
        h.next=r.next
        this.length--
    }
    //reverse
    reverse(){
        for(let i=this.length-1;i>-1;i--){
            if(i!=0){
                let h=this.traverseToIndex(i-1)
                let f=h.next
                f.next=h
                
            }else if(i==0){
                let a=this.head
                this.head=this.tail
                this.tail=a
                a.next=null
            }
            
        }
    }
    traverseToIndex(index){
        let c=0
        let currentNode=this.head
        while(c!==index){
            currentNode=currentNode.next
            c++;
        }
        return currentNode
    }
    printList(){
        let arr=[]
        let a=this.head
        while(a!=null){
            arr.push(a.value)
            a=a.next
        }
        console.log(arr)
    }
}

let a=new linkedlist(2)
a.append(3)
a.append(4)
a.prepend(1)
a.printList()
a.append(5)
a.append(6)
a.reverse()
console.log(a)
a.printList()

