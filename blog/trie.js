
class Node {
	constructor(letter) {
		this.data = letter || null;
		this.children = {};
		this.isCompleteWord = false;
	}
}

class Trie {
	constructor() {
		this.rootNode = new Node();
		this.size = 0;
	}

	add(str) {
		let strArr = str.trim().split(''),
			thisNode = this.rootNode;
			for (var letter of strArr) {
				if (thisNode.children[letter] != undefined) {
					thisNode = thisNode.children[letter];
				} else {
					thisNode.children[letter] = new Node(letter);
					thisNode = thisNode.children[letter];
					this.size++;
				}
			}
			thisNode.isCompleteWord = true;
	}

	printTrie(thisNode) {
		console.log(thisNode.data);
		if (thisNode.isCompleteWord) console.log('*');
		// if (node == null) return;
		for (var letter in thisNode.children) {
			// console.log('afdsaf');
			// console.log(node);
			this.printTrie(thisNode.children[letter]);
		}
	}

	search(str) {
		let strArr = str.trim().split(''),
			thisNode = this.rootNode;
		for (var letter of strArr) {
			if (thisNode.children[letter] != undefined) {
				console.log('found : ' + letter);
				thisNode = thisNode.children[letter];
			} else {
				console.log('full word not found');
			}
		}
	}

}


let tryTrie = new Trie();
tryTrie.add('foo');
tryTrie.add('foo');
tryTrie.add('fool');
tryTrie.add('foodle');
tryTrie.add('poodle');
tryTrie.search('poo');
console.log(tryTrie.rootNode);
tryTrie.printTrie(tryTrie.rootNode);
