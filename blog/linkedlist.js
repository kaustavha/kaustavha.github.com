
// Example of linkedlist defined from a single node class
class NodeLinkedlist {
	constructor(data) {
		this.data = data;
		this.next = null;
	}

	appendToTail(data) {
		this.end = new Node(data);
		n = this;
		while (n.next != null) {
			n = n.next;
		}
		n.next = end;
	}
}

// Example of linked list class building on a node class
class Node {
	constructor(d) {
		this.data = d;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this._length = 0;
		this.head = null;
	}

	appendToTail(data) {
		var node = new Node(data),
			currentNode = this.head;

		if (currentNode == null) {
			this.head = node;
		} else {
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		this._length++;
		return this.head;
	}

	deleteNodeByData(data) {
		var node = this.head;
		if (node.data == data) {
			this.head = this.head.next;
		} else {
			while (node.next != null) {
				if (node.next.data == data) {
					node.next = node.next.next;
					return this.head
				}
				node = node.next;
			}
		}
		return this.head;
	}

	printAllNodes() {
		var node = this.head,
			i = 0;
		while (node) {
			console.log(i++ + ":" + node.data);
			node = node.next;
		}
		return this.head;
	}

	// 2.1 Remove dups
	// if buffer isnt allowed, sort then compare adjacent elements
	removeDups() {
		var currNode = this.head,
			buf = {},
			prevNode;

		while (currNode != null) {
			if (buf[currNode.data]) {
				prevNode.next = currNode.next;
				currNode = prevNode.next;
			} else {
				buf[currNode.data] = true;
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		return this.head;
	}

	// 2.2 find kth to last
	findKthToLast(k) {
		var currNode = this.head,
			i = k-1;
		while (currNode != null) {
			var kAway = currNode;
			while (i > 0 && kAway.next != null) {
				kAway = kAway.next;
				i--;
			}
			if (i == 0 && kAway.next == null) {
				return currNode;
			} else if (i > 0 && kAway.next == null) {
				return 'll too short';
			} else {
				currNode = currNode.next;
				i = k-1;
			}
		}
	}

	// 2.3 delete middle node
}

// Test
var LL = new SinglyLinkedList();
LL.appendToTail('A')
LL.appendToTail('B')
LL.appendToTail('C')
LL.appendToTail('DE');
LL.deleteNodeByData('DE');
LL.appendToTail('C');
LL.appendToTail('C');
LL.removeDups();
console.log(LL.findKthToLast(4));
console.log(LL.findKthToLast(3));
LL.printAllNodes();
