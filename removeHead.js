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
	
LinkedList.prototype.removeHead = function() {
	if(!this.head) return null;
	var val = this.head.value;
	this.head = this.head.next;
	if (this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

var ll = new LinkedList();

ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

ll.removeHead();
console.log(ll.removeHead()); //add to Google Console