function NailingPlanks(A, B, C) {
    var begin = 0;
    var end = C.length - 1;
    var res = -1;
    while (begin <= end) {
        var mid = parseInt((begin + end) / 2);
        if (check(A, B, C, mid + 1)) {
            end = mid - 1;
            res = mid + 1;
        } else {
            begin = mid + 1;
        }
    }
    return res;
}

function check(a, b, c, num) {
    var pNails = new Array(2 * c.length + 1).fill(0);
    for (var i = 0; i < num; ++i) {
        ++pNails[c[i]];
    }
    console.log(pNails)
    for (i = 1; i < pNails.length; ++i) {
        pNails[i] += pNails[i - 1];
    }
    for (i = 0; i < a.length; ++i) {
        if (pNails[b[i]] <= pNails[a[i] - 1]) return false;
    }
    return true;
}

let A = [1, 4, 5, 8];
let B = [4, 5, 9, 10];
let C = [4, 6, 7, 10, 2];
//output should be 4

console.log(NailingPlanks(A, B, C));