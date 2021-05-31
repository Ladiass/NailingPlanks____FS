function solution(A, B, C) {
    let lookUp = {};
    let i = 1;
    C.map((n, index) => [n, index]).sort(([nA, indexA], [nB, indexB]) => {
        if (nA === nB) {
            return indexA - indexB;
        }
        return nA - nB;
    }).forEach(([n, index]) => {
        while (i <= n) {
            lookUp[i] = [n, index];
            i++;
        }
    });
 
    let ret = -1;
    for (let i = 0; i < A.length; i++) {
        let start = A[i];
        let end = B[i];
        let small = Infinity;
        let flag = true;
 
        do {
            let [n, index] = lookUp[start] || [Infinity];
            if (n > end) {
                break;
            }
            flag = false;
 
            small = Math.min(small, index);
            if (small <= ret) {
                break;
            }
            start = n + 1;
        } while (start <= end);
 
        if (flag) {
            return -1;
        }
 
        if (ret < small) {
            ret = small;
        }
    }
 
    return ret + 1;
}

console.log(solution([1,4,5,8],[4,5,9,10],[4,6,7,10]))