class Node {
	constructor(name, children) {
		this.name = name || '';
		this.children = children || []; // collection of nodes
	}
}

class BinaryTreeNode {
	constructor(name, left, right) {
		this.name = name || null;
		this.left = left || null;
		this.right = right || null;
	}
}

class Tree {
	constructor() {
		this.root = new Node();
	}
}

function visit(node) {
	if (node != null && node.name != null) {
		console.log(node.name);
	} else {
		console.log('malformed node');
	}
}

// works on binary trees with BinaryTreeNodes
function inOrderTraversal(node) {
	if (node != null) {
		inOrderTraversal(node.left);
		visit(node);
		inOrderTraversal(node.right);
	}
}

// preorder i.e. parent before child
function preOrderTraversal(node) {
	if (node != null) {
		visit(node);
		preOrderTraversal(node.left);
		preOrderTraversal(node.right);
	}
}


function postOrderTraversal(node) {
	if (node != null) {
		postOrderTraversal(node.left);
		postOrderTraversal(node.right);
		visit(node);
	}
}



// manually create a bintree based on last one on page 102
//		10
//	5		20
//9	  18  3    7		
function createExampleBinTree() {
	let child1 = new BinaryTreeNode(9),
		child2 = new BinaryTreeNode(18),
		child3 = new BinaryTreeNode(3),
		child4 = new BinaryTreeNode(7),
		leftNode = new BinaryTreeNode(5, child1, child2),
		rightNode = new BinaryTreeNode(20, child3, child4),
		rootNode = new BinaryTreeNode(10, leftNode, rightNode);
	return rootNode;
}

// let rootNode = createExampleBinTree();
// console.log(rootNode);
// console.log('inOrderTraversal');
// inOrderTraversal(rootNode);
// console.log('preOrderTraversal');
// preOrderTraversal(rootNode);
// console.log('postOrderTraversal');
// postOrderTraversal(rootNode);


// class minHeapNode {
// 	constructor(value, parent, left, right) {
// 		this.value = value || null;
// 		this.parent = parent || null;
// 		this.left = left || null;
// 		this.right = right || null;
// 	}
// }

// function createExampleMinHeap() {
// 	let rootNode = new minHeapNode(4);
// 	rootNode.left = new minHeapNode(50, 
// 								rootNode, 
// 								new minHeapNode(55, rootNode.left), 
// 								new minHeapNode(90, rootNode.left));
// 	rootNode.right = new minHeapNode(7, 
// 								rootNode, 
// 								new minHeapNode(87, rootNode.right));
// 	return rootNode;
// 	// let fiftyfive = minHeapNode(55),
// 	// 	ninety = minHeapNode(90),
// 	// 	eightysev = minHeapNode(87),
// 	// 	fifty = minHeapNode(50),
// 	// 	sev = minHeapNode(7),
// 	// 	rootNode = minHeapNode(4);

// }

// let minHeap = createExampleMinHeap();
// console.log(minHeap);
// console.log(minHeap.left);

// function insertMinHeap(node, tree) {
// 	// first insert element into right most position
// 	while (tree.right != null) {
// 		tree = tree.right;
// 	}
// 	tree.right = node;
// 	// bubble up value if it is smaller

// }



class MinIntHeap {
	constructor() {
		this.capacity = 10;
		this.size = 0;
		this.items = [];
	}

	getLeftChildIndex(parentIndex) { return Math.floor(2*parentIndex+1); }
	getRightChildIndex(parentIndex) { return Math.floor(2*parentIndex+2); }
	getParentIndex(childIndex) { return Math.floor((childIndex-1) / 2); }

	hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }
	hasRightChild(index) {return this.getRightChildIndex(index) < this.size; }
	hasParent(index) {return this.getParentIndex(index) >= 0}

	leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
	rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
	parent(index) { return this.items[this.getParentIndex(index)]; }

	swap(indexOne, indexTwo) {
		[this.items[indexOne], this.items3[indexTwo]] = [this.items[indexTwo], this.items[indexOne]];
	}

	peek() {
		if (this.size == 0) this.IllegalStateException();
		return this.items[0];
	}

	// extract and remove min ele
	poll() {
		if (this.size == 0) this.IllegalStateException();
		let item = this.items[0];
		this.items[0] = this.items[this.size-1];
		this.size--;
		this.heapifyDown();
		return item;
	}

	add(item) {
		this.items[this.size] = item;
		this.size++;
		this.heapifyUp();
	}

	heapifyUp() {
		let index = this.size - 1;
		while (this.hasParent(index) && this.parent(index) > this.items[index]) {
			this.swap(this.getParentIndex(index), index);
			index = this.getParentIndex(index);
		}
	}

	heapifyDown() {
		let index = 0;
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index);
			if (this.hasRightChild(index) &&
				this.rightChild(index) < this.leftChild(index)) {
				smallerChildIndex = this.getRightChildIndex(index);
			}

			if (this.items[index] < this.items[smallerChildIndex]) {
				break;
			} else {
				this.swap(index, smallerChildIndex);
			}
			index = smallerChildIndex;
		}
	}
}

// let testMinHeap = new MinIntHeap();
// testMinHeap.add(20);
// testMinHeap.add(15);
// testMinHeap.add(40);
// testMinHeap.add(33);
// testMinHeap.add(1);
// testMinHeap.poll();
// console.log(testMinHeap);
