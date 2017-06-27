// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/////////////// ignore above this line ////////////////////

function twinArrays(ar1, ar2){
    let hashmap1 = {}, hashmap2 = {}, minsum, diff;
    for (var i = 0; i<ar1.length; i++) {
        if (hashmap1[ar1[i]] == undefined) {
            hashmap1[ar1[i]] = [];
        } 
        if (hashmap2[ar2[i]] == undefined) {
            hashmap2[ar2[i]] =[]
        }
        hashmap1[ar1[i]].push(i);
        hashmap2[ar2[i]].push(i);
    }

    for (var k = 0; k < Number.MAX_SAFE_INTEGER; k++) {
        for (var key in hashmap1) {
            let rem = k - key;
            if (hashmap2[rem] !== undefined) {
                if (hashmap2[rem].length > hashmap1[key].length) {
                    diff = hashmap2[rem].filter(a => !hashmap1[key].includes(a));
                } else {
                    diff = hashmap1[key].filter(a => !hashmap2[rem].includes(a));
                }
                
                if (hashmap1[key].length == 1 && hashmap2[rem].length == 1 && hashmap2[rem][0] != hashmap1[key][0]) {
                    return k;
                } else if (hashmap1[key].length > 1 && hashmap2[rem].length > 1) {
                    return k;
                } else if (diff.length > 0) {
                    return k;
                }
            }
        }
    }
}

console.log(twinArrays([5,4,3,2,1],[1,2,3,4,5]));

console.log(twinArrays([5,4,3,2,1],[9,9,9,9,9]));

console.log(twinArrays([5,4,3,2,2],[9,9,9,9,9]));

console.log(twinArrays([5,4,3,2,1],[5,4,3,2,1]));

console.log(twinArrays([ 9, 8, 8, 8, 8, 8, 8 ],[ 8, 8, 8, 8, 8, 8, 8 ]));
console.log(twinArrays([ 8, 8, 8, 8, 8, 8, 8 ],[ 8, 8, 8, 8, 8, 8, 8 ]));

console.log(twinArrays([ 9, 8, 8, 8, 8, 8, 8 ],[ 9, 8, 8, 8, 8, 8, 6 ]));

console.log(twinArrays([ 6, 8, 8, 8, 8, 8, 8 ],[ 6, 8, 8, 8, 8, 8, 8 ]));

console.log(twinArrays([ 6, 6, 8, 8, 8, 8, 8 ],[ 6, 6, 8, 8, 8, 8, 6 ]));


console.log(twinArrays([9,9],[2,4]));
console.log(twinArrays([ 10, 10 ],[ 11, 11 ]));

// function main() {
//     var n = parseInt(readLine());
//     ar1 = readLine().split(' ');
//     ar1 = ar1.map(Number);
//     ar2 = readLine().split(' ');
//     ar2 = ar2.map(Number);
//     var result = twinArrays(ar1, ar2);
//     process.stdout.write("" + result + "\n");

// }
