// Arrays

function test(funct, input, out) {
	return funct(input) == out
}

// 1.1 string has all uniq chars?
function allUniq(str) {
	let charArr = str.split(''),
		out = 'str has no dups';

	for (var i = 0; i < charArr.length; i++) {
		let initialChar = charArr[i];
		for (var j = i+1; j < charArr.length; j++) {
			if (initialChar == charArr[j]) {
				out = 'str has dups';
				break;
			}
		}
	}
	console.log(out)
}

allUniq('asdf'); //test success
allUniq('assss'); // test fail

// 1.2 Check permutations given 2 strs
function checkPermu(str1, str2) {
	let out = 'strs are perms',
		strArr1 = str1.split(''),
		strArr2 = str2.split('');

	if (str1.length !== str2.length) {
		out = 'strs are uniq';
	} else {
		for (var i = 0; i < strArr1.length; i++) {
			if (strArr2.indexOf(strArr1[i]) == -1) {
				out = 'strs are uniq';
			}
		}
	}
	console.log(out);
}

checkPermu('wow', 'wut'); //check success
checkPermu('www', 'wwww'); // edge case sorta
checkPermu('ass', 'ssa'); // check fail

// 1.3 urlify, in: 'mr john smit  ', out: 'mr%20john%20smit'
function URLify(str) {
	let out = str.trim().split(' ').join('%20');
	console.log(out);
}

URLify("Mr John Smith ");

// 1.4 Palindrome permutation. Check if str is permutation of a palindrome
function palindromePermutation(str) {
	let obj = {}, uniqChars = 0;
	for (var v of str) {
		if (obj[v]) {
			obj[v] += 1;
		} else {
			obj[v] = 1;
		}
	}
    for (var k in obj) {
    	if (obj[k]%2 > 0) uniqChars++;
    }

    if (uniqChars > 1) {
    	console.log('false');
    	return false;
    } else {
    	console.log('true');
    	return true;
    }

}

palindromePermutation('tacocat');
