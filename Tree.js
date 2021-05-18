class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
        if(this.root==null)this.root=new Node(value)
        else{
          let pointeer =this.root
          while(true){
            if(value>pointeer.value){
              if(pointeer.right==null){
                pointeer.right=new Node(value)
                return 
              }
              pointeer=pointeer.right
            }else if(value<pointeer.value){
              if(pointeer.left==null){
                pointeer.left=new Node(value)
                return 
              }
              pointeer=pointeer.left
            }
          }
        }
        
    }
    lookup(value){
      //Code here
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))

  function divider(value,node){
    if(value>node.value){
      return node.right
    }else if(value<node.value){
      return node.left
    }
  }
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  
  