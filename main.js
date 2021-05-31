console.time()




















function solution(A, B, C) {
    let res = -1; //result will be the output later
    let PosPlanks = {};
    let lenPlanks = null;

    
    if (A.length <= B.length) {
        lenPlanks = A.length;
    } else {
        lenPlanks = B.length
    }

    for (let i = 0; i < lenPlanks; i++) {
        PosPlanks[i] = [A[i], B[i]];
        PosPlanks[i].nailed = 0;
    }
    

    C.forEach((nVal, n) => {
        for (let m = 0; m < lenPlanks; ++m) {
            if (A[m] <= nVal && nVal <= B[m]) {
                PosPlanks[m].nailed = 1;
                res = 0;
            }
        }
    })

    for (let j in PosPlanks) {
        if (PosPlanks[j].nailed === 1) {
            ++res
        }
    }

    return res
}

let aPosPlanks = [1, 4, 5, 8]
let bPosPlanks = [4, 5, 9, 10]
let cNails = [4, 6, 7, 10, 2]

console.log(solution(aPosPlanks, bPosPlanks, cNails))






























console.timeEnd();