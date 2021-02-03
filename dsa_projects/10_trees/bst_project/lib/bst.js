class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   // ITERATIVE INSERTION
//    insert(val) {
//        let currentNode = this.root
//        let newNode = new TreeNode(val)
//        if(!this.root) this.root = newNode

//        while(currentNode) {
//            if(newNode.val >= currentNode.val) {
//                if(!currentNode.right) {
//                    currentNode.right = newNode
//                    break
//                } else currentNode = currentNode.right
//            } else {
//                if (!currentNode.left) {
//                    currentNode.left = newNode
//                    break
//                } else currentNode = currentNode.left
//            }
//        }
//    }

// RECURSIVE INSERTION
    insert(val, root = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right);
            }
        }
    }

   searchRecur(val, currentNode = this.root) {
       if(!currentNode) return false
       
       if(val > currentNode.val) return this.searchRecur(val, currentNode.right)
       else if (val < currentNode.val) return this.searchRecur(val, currentNode.left)
       else return true
   }

   searchIter(val) {
       let currentNode = this.root
       if (!currentNode) return false

       while(currentNode) {
           if(val > currentNode.val) currentNode = currentNode.right
           else if(val < currentNode.val) currentNode = currentNode.left
           else return true
       }

       return false
   }
}

// let bst = new BST()

// bst.insert(10)
// bst.insert(11)
// bst.insert(13)
// bst.insert(7)
// bst.insert(9)
// bst.insert(14)

// console.log(bst.searchRecur(14))
module.exports = {
    TreeNode,
    BST
};