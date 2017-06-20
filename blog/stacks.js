class StackNode {
	constructor(data, next) {
		this.data = data || null;
		this.next = next || null;
	}
}

// LIFO stack
class Stack {
	constructor() {
			this.top = new StackNode();
	}

	isEmpty() {
		return this.top == null;
	}

	checkAndThrowEmptyTopException() {
		if (this.isEmpty()) {
			return 'Error empty stcack';
		}
	}

	pop() {
		this.checkAndThrowEmptyTopException();
		let item = this.top.data;
		this.top = this.top.next;
		return item;
	}

	push(item) {
		let sn = new StackNode(item, this.top);
		this.top = sn;
	}

	peek() {
		this.checkAndThrowEmptyTopException();
		return this.top.data;
	}

}

// Test
let stack = new Stack();
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.peek());


class QueueNode {
	constructor(data, next) {
		this.data = data || null;
		this.next = next || null;
	}
}

class Queue {
	constructor(first, last) {
		this.first = first || null;
		this.last = last || null;
	}

	isEmpty() {
		return this.first == null;
	}

	checkAndThrowEmptyQException() {
		if (this.isEmpty()) return "Err empty queue"
	}

	add(item) {
		let t = new QueueNode(item);
		if (this.last != null) {
			this.last.next = t;
		} else {
			this.last = t;
		}
		if (first == null) {
			this.first = last;
		}
	}

	remove() {
		this.checkAndThrowEmptyQException();
		let data = this.first.data;
		this.first = this.first.next;
		if (this.first == null) last = null;
		return data;
	}

	peek() {
		this.checkAndThrowEmptyQException();
		return this.first.data;
	}
}













