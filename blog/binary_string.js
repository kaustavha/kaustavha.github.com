// Consider a binary string, , with an initial value of . We expand  by performing the following steps:

// Create a string, , where each character  is equal to . For example, if , then . Note that  and  always have the same length because  is the complement of .
// Append  to the end of  so that . In the example above,  becomes .
// We keep on expanding  using steps  and  until the length of  exceeds .
// When we repeat the expansion operation, string  grows like this:

// Given  queries in the form of a zero-based index, , solve each query by printing the character at index  in  on a new line.

// Input Format

// The first line contains an integer denoting  (number of queries). 
// Each of the  subsequent lines contains an integer describing the value of  for a query.

// Constraints

// Output Format

// For each query, print the value of  (i.e., either  or ) on a new line.

// Sample Input 0

// 3
// 2
// 5
// 7
// Sample Output 0

// 1
// 0
// 1
// Explanation 0

// First, we build string . Next, we answer the following sequence of  queries:

// For ,  so we print  on a new line.
// For ,  so we print  on a new line.
// For ,  so we print  on a new line


function test(input, out) {
	console.log(duplication(input) == out)
}

let store = {};
// length, 

function duplication(x) {
	let s = '0';
	while (s.length < 1000) {
		// let newExpSLen = s.length * 2;
		// if (store[newExpSLen] != undefined) {
		// 	s = store[newExpSLen];
		// } else {
			s = buildS(s);
		// 	store[s.length] = s;
		// }
	}
	console.log(s);
	return s[x];
}

function buildS(sInit) {
	let tInit = '',
		sArr = sInit.split('');
	for (bit of sArr) {
		tInit += ''+flip(bit);
	}
	return sInit+tInit;
}

function flip(n) {
	return (''+(1-parseInt(n)));
}

test(2, 1);
test(5, 0);
test(7, 1)