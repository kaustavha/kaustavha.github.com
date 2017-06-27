function test(ins, out) {
	console.log(patternCount(ins) == out);
}

function patternCount(s) {
	let sArr = s.split(''),
		i = 0,
		patternsCounted = 0,
		isIncompletePattern = false,
		seen0s = false;

	while (i<sArr.length) {
		let thisEle = sArr[i];
		// if (parseInt(thisEle) == 1) {
		// 	isIncompletePattern = true;
		// } else if (parseInt(thisEle))
		if (parseInt(thisEle) == 1 && isIncompletePattern && seen0s) {
			patternsCounted++;
			seen0s = false;
			i++;
		} else if (parseInt(thisEle) == 1 && isIncompletePattern && !seen0s) {
			i++;
		} else if (parseInt(thisEle) == 1 && !isIncompletePattern) {
			isIncompletePattern = true;
			i++;
		} else if (parseInt(thisEle) != 0 && isIncompletePattern) {
			isIncompletePattern = false;
			seen0s = false;
			i++;
		} else if (parseInt(thisEle) == 0 && isIncompletePattern && !seen0s) {
			seen0s = true;
			i++;
		} else {
			i++;
		}
	}
	return patternsCounted;
}

test('100001abc101', 2);
test('1111', 0);
test('0000', 0);
test('11101101', 2);
test('1001010001', 3);
test('1001010001', 3);
