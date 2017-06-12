class StackNode {
	constructor(data, next) {
		this.data = data || null;
		this.next = next || null;
	}
}

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
// stack.pop();
console.log(stack.peek());