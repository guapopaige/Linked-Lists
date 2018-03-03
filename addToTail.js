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
	
var myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToHead(100);

console.log(myLL); //add to Google Console