/*

Instructions: Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.


Examples:

bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11


Code below: 

*/

function bitwiseAND(n1, n2) {
    bs1 = (n1 >>> 0).toString(2);
    bs2 = (n2 >>> 0).toString(2);
    bn1 = parseInt(bs1, 2);
    bn2 = parseInt(bs2, 2);
    answer = bn1 & bn2;
    return answer;
}

function bitwiseOR(n1, n2) {
    bs1 = (n1 >>> 0).toString(2);
    bs2 = (n2 >>> 0).toString(2);
    bn1 = parseInt(bs1, 2);
    bn2 = parseInt(bs2, 2);
    answer = bn1 | bn2;
    return answer;
}

function bitwiseXOR(n1, n2) {
    bs1 = (n1 >>> 0).toString(2);
    bs2 = (n2 >>> 0).toString(2);
    bn1 = parseInt(bs1, 2);
    bn2 = parseInt(bs2, 2);
    answer = bn1 ^ bn2;
    return answer;
}


bitwiseAND(7, 12);
bitwiseAND(16, 222);
bitwiseAND(5, 108);


bitwiseOR(7, 12);
bitwiseOR(16, 222);
bitwiseOR(5, 108);


bitwiseXOR(7, 12);
bitwiseXOR(16, 222);
bitwiseXOR(5, 108);
