const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }}

//Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.
class node{
    constructor(data = null, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }}

//Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.
class Tree{
    constructor(treeArray){
        this.root = this.buildTree(treeArray, treeArray[0] , treeArray.length - 1)
        prettyPrint(this.root)
        
    }

    buildTree(array, start, end) {
        if (start > end) return null;
    
        let mid = parseInt((start + end) / 2);
        let root = new node(array[mid]);
    
        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);
    
        return root;
    }

    find(key, root = this.root){
        if (root == null) return false;
        if (root.data == key) return root;
        if (root.data < key ){ 
            return this.find(root.right, key)
        }else if(root.data > key ){ 
            return this.find(root.left, key)
        };

        prettyPrint(this.root)
        return root;
    }

    insert(key, root = this.root){
        if (root == null) return (root = new node(key));
        if (root.data < key) root.right = this.insert(key, root.right);
        if (root.data > key) root.left = this.insert(key, root.left);
        
        prettyPrint(this.root);
        return root;
    }

    delete(key, root= this.root){
        if (root == null) return root;
        if (root.data < key) root.right = this.delete(key, root.right);
        if (root.data > key) root.left = this.delete(key, root.left);
        if (root.data == key){
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            root.data = this.minValue(root);
            root.right = this.delete(root.right, root.data)
        };
        prettyPrint(this.root)
        return root
    }

    minValue(root){
        let min = root.data;
        while(root != null){
            min = root.data;
            root = root.left
        }
        //prettyPrint(this.root);
        return root;
    }
    levelOrder(arr = [], queue = [], root = this.root) {
        if (root === null) return;
        // Visit the root
        arr.push(root.data);

        // Traverse to left and right children -> add to queue
        queue.push(root.left);
        queue.push(root.right);

        // Move to next level
        while (queue.length) {
        const level = queue[0];
        queue.shift();
        this.levelOrder(arr, queue, level)
        }

        return arr;
    }
    preorder(root) {
        if (root == null) return;
    
    if (root.data !== undefined) {
        this.preorderData.push(root.data);
        }
    
    if (root.leftPart !== null) {
        this.preorder(root.leftPart);
        }
    
    if (root.rightPart !== null) {
        this.preorder(root.rightPart);
        }
    }
    
    inorder(root) {
        if (root == null) return;
    
        if (root.leftPart !== null) {
        this.inorder(root.leftPart);
        }
    
        if (root.data !== undefined) {
        this.inorderData.push(root.data);
        }
    
        if (root.rightPart !== null) {
        this.inorder(root.rightPart);
        }
    }
    
    postorder(root) {
        if (root == null) return;
    
        if (root.leftPart !== null) {
        this.postorder(root.leftPart);
        }
    
        if (root.rightPart !== null) {
        this.postorder(root.rightPart);
        }
    
        if (root.data !== undefined) this.postorderData.push(root.data);
    }
    
    height(root) {
        if (root == null) {
        return -1;
        } else {
        let left = this.height(root.leftPart);
        let right = this.height(root.rightPart);
    
        return Math.max(left, right) + 1;
        }
    }
    
    depth(node, root = this.root) {
        let depth = -1;
    
    if (node == null) return depth;
    
    if (
        root == node ||
        (depth = this.depth(node, root.leftPart)) >= 0 ||
        (depth = this.depth(node, root.rightPart) >= 0)
        ) {
        return depth + 1;
        }
    
        return depth;
    }
    
    isBalanced(root) {
        if (root == null) return false;
    
        let leftHalf = root.leftPart;
        let rightHalf = root.rightPart;
    
        if (Math.abs(this.height(leftHalf) - this.height(rightHalf)) > 1) {
        return false;
        } else {
        return true;
        }
    }
    
    rebalance() {
        if (this.isBalanced(this.root)) return this.root;
    
        let rebalancedNewTreeArray = [];
        rebalancedNewTreeArray = this.traverse(this.root, rebalancedNewTreeArray);
    
        let balancedTree = new Tree(rebalancedNewTreeArray);
    
        return balancedTree.root;
    }
    
}

let randomArray = [1,2,3,4,5,6,7,8,92,102,112]
BinaryTree = new Tree(randomArray, randomArray[0], randomArray.length)
console.log(BinaryTree.root)
//BinaryTree.insert(82)
//console.log(BinaryTree.find(112));
//BinaryTree.delete(7)
//console.log(BinaryTree.levelOrder())
console.log(BinaryTree.postorder())