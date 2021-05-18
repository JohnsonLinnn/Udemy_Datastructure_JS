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
      if(!this.root)return false 
      let pointer =this.root
      while(pointer){
        if(value>pointer.value){
          pointer=pointer.right
        }else if(value<pointer.value){
          pointer=pointer.left
        }else if(value==pointer.value)return pointer
      }
      return false
    }
    remove(value){
      //check if the tree has the root, if not return false
      //get the parent node and current node
      //loop though the nodes while keeping track of the parent node
      //find the node
      //condition 1:if the node is a leaf delete it 
      //condition 2:if the node has 2 child 
      //condition 3:if the node has 1 child
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)

  let ham = tree.lookup(18)
  console.log(ham)
  JSON.stringify(traverse(tree.root))
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  
  