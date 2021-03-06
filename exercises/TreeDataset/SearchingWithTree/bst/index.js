// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data=data;
        this.left = null;
        this.right= null;
    }

    insert(data){

        if(data >this.data){
            if(this.right){
                this.insert.call(this.right,data);
            }else{
                this.right = new Node(data);
            }
        }else{
            if(this.left){
                this.insert.call(this.left,data);
            }else{
                this.left = new Node(data);
            }
            
        }
    }

    contains(data){
        if(this.data == data){
            return this;
        }

        if(this.data > data && this.left){
            return this.contains.call(this.left,data)
        }
        else if(this.data < data && this.right){
            return this.contains.call(this.right,data)
        }
        
        return null;
    }
}

module.exports = Node;
