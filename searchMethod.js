function LinkedList() {  //create constructor function
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev){  //create node
	this.value = value;
	this.next = next;
	this.prev = prev;
	
}	

LinkedList.prototype.addToTail = function(value) { //create a method on our prototype called addToHead
	var newNode = new Node(value, null, this.tail); //assign value for node
	if(this.tail) this.tail.next = newNode; //if the linked list is not empty and has a head set we set its next pointer to the new node or the tail
	else this.head = newNode; //if its empty set the link list set newnode to the head which will be both the head and tail
	this.tail = newNode; //make newNode the head of our lists
};
	
LinkedList.prototype.removeTail = function() {
	if(!this.tail) return null;
	var val = this.tail.value;
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	else this.head = null;
	return val;
};

LinkedList.prototype.search = function(searchValue) {
	var currentNode = this.head;
	while(currentNode) {
		if (currentNode.value === searchValue) return cuurentNode.value;
		currentNode = currentNode.next;
	}
	return null;
};



var myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);


console.log(myLL.search('hello')); //add to Google Console