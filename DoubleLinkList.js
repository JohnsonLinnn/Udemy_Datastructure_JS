/*
{
    value
    previous:
    next:

}
*/
class DoubleLinkListed{
    //constructor
    constructor(value){
        this.head={
            value:value,
            previous:null,
            next:null,
        }
        this.tail=this.head
        this.length=1;
    }
    //append
    append(value){
        let newnode={
            value:value,
            previous:null,
            next:null
        }
        newnode.previous=this.tail
        this.tail.next=newnode
        this.tail=newnode
        this.length++
    }
    //preppend
    prepend(value){
        let newnode={
            value:value,
            previous:null,
            next:null
        }
        newnode.next=this.head
        this.head.previous=newnode
        this.head=newnode
        this.length++
    }
    //insert
    insert(index,value){
        let newnode={
            value:value,
            previous:null,
            next:null
        }
        let leader=this.traverseToIndex(index-1)
        let follower=leader.next
        newnode.next=leader.next
        follower.previous=newnode
        leader.next=newnode
        newnode.previous=leader
        this.length++
    }
    //remove
    remove(index){
        let leader=this.traverseToIndex(index-1)
        let r=leader.next
        let f=r.next
        leader.next=r.next
        f.previous=leader
        this.length--
    }
    //Traverse
    traverseToIndex(index){
        let c=0
        let currentNode=this.head
        while(c!==index){
            currentNode=currentNode.next
            c++;
        }
        return currentNode
    }
    //Print
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

let l=new DoubleLinkListed(10)
l.append(20)
l.prepend(5)
l.insert(1,8)
l.printList()
l.remove(2)
l.printList()
