//LinkedList class / factory, which will represent the full list.
class LinkedList{
    constructor(head = null){
        this.head = head;

    }
    //append(value) adds a new node containing value to the end of the list
    append(value){
        //Check for empty Head
        if (!this.head){
            this.head = new Node(value)
            return this;
        } else{
        //Append a new node
        let tail = this.head;
        while(tail.nextNode !== null){
            tail = tail.nextNode
        }
        tail.nextNode = new Node(value)
        return tail;
        }
    }
    //prepend(value) adds a new node containing value to the start of the list
    prepend(value){
        if (!this.head){
            this.head = new Node(value)
            return this;
        } else{
            const preHead = this.head;
            this.head = new Node(value, preHead)

        }

    }
    //size() returns the total number of nodes in the list
    size(){
        let countNodes = 0;
        let nodeCounter = this.head;
        while(nodeCounter !== null){
            countNodes++;
            nodeCounter = countNodes.nextNode;
        }
        return countNodes;
    }
    //head() returns the first node in the list
    head(){
        return this.head;
    }
    //tail() returns the last node in the list
    tail(){
        if (!this.head){ 
        return null;
    } else{
        return this.tail;
    }}
    //at(index) returns the node at the given index
    at(index){
        if (!this.head) return null;
        let counter = this.head;
        for (let i = 0; i < index; i++){
            counter = counter.nextNode;
        }
        return counter ? counter : null;
    }
    //pop() removes the last element from the list
    pop() {
        let temp = this.head;
    
        while (temp.nextNode.nextNode != null) {
        temp = temp.nextNode;
        }
    
        temp.nextNode = null;
    }

    find(value) {
        let temp = this.head;
        let index = 0;
    
        while (temp != null) {
        if (temp.value == value) return index;
        index++;
        temp = temp.nextNode;
        }
    
        return null;
    }
    
    toString() {
        let temp = this.head;
        let string = "";
    
        while (temp != null) {
        console.log(temp.value);
        string += `(${temp.value}) -> `;
        temp = temp.nextNode;
        }
    
        string += "(null)";
    
        return string;
    }
    
    insertAt(value, index) {
        let temp = this.head;
        let tempNext;
        let count = 1;
        let newNode = new Node(value);
    
        if (index == 0) {
        newNode.nextNode = temp;
        this.head = newNode;
        return;
        }
    
        while (temp != null) {
        if (count == index) {
            tempNext = temp.nextNode;
            temp.nextNode = newNode;
            newNode.nextNode = tempNext;
            return;
        }
    
        count++;
        temp = temp.nextNode;
        }
    }
    
    removeAt(index) {
        if (index === 0) {
        const valueOfRemoved = this.HEAD.value;
        this.HEAD = this.HEAD.nextNode;
        return valueOfRemoved;
        }
    
        const nodeBeforeRemovedOne = this.at(index - 1);
        const valueOfRemoved = nodeBeforeRemovedOne.nextNode.value;
        nodeBeforeRemovedOne.nextNode = nodeBeforeRemovedOne.nextNode.nextNode;
    
        return valueOfRemoved;
    }




}

//Node class / factory, containing a value function and a link to the nextNode, set both as null by default.

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }


}