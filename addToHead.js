function LinkedList() {  //create constructor function
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev){  //create node
	this.value = value;
	this.next = next;
	this.prev = prev;
	
}	

LinkedList.prototype.addToHead = function(value) { //create a method on our prototype called addToHead
	var newNode = new Node(value, this.head, null); //assign value for node
	if(this.head) this.head.prev = newNode; //if this node already has a head set that head previous pointer to our new head
	else this.tail = newNode; //if its empty set the link list set newnode to the tail which will be both the head and tail
	this.head = newNode; //make newNode the head of our lists
};
	
var ll = new LinkedList();


ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);


console.log(ll); //add to Google Console