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


LinkedList.prototype.indexOf = function(value) { //Find the values and return the indexes of that value in an array
	var indexes = []; // create an array
	var currentIndex = 0; // set the current index equal to 0
	var currentNode = this.head; //set the current node to the beginning of the head
	while(currentNode) { // create loop top travel through the whole linked list while currentNode is present and doesnt equal null
		if (currentNode.value === value) {
				indexes.push(currentIndex);// push the current index in our indexes array
		}
		currentNode = currentNode.next; 
		currentIndex++; // increase currentIndex by 1 in our while loop
	}
	return indexes;
};
	

var myLL = new LinkedList();

myLL.addToTail(19);
myLL.addToTail(5);
myLL.addToTail(20);
myLL.addToTail(20);
myLL.addToTail(5);
myLL.addToTail(20);
myLL.addToTail(5);

console.log(myLL.indexOf(5)); //add to Google Console