arr1 = [1, 2, 3]
arr2 = [1, 4, 9]

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let a1 = {}
    let a2 = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!a1[arr1[i]]) {
            a1[arr1[i]] = 1
        } else {
            a1[arr1[i]] += 1;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (!a2[arr2[j]]) {
            a2[arr2[j]] = 1;
        } else {
            a2[arr2[j]] += 1;
        }
    }
    for (let key in a1) {
        if (!(key ** 2 in a2)) {
            return false;
        }
        if (a2[key ** 2] !== a1[key]) {
            return false;
        }
    }
    return true
}

same(arr1, arr2)