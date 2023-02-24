arr1: [3, 5, 1, 8, -3, 7, 8]

arr2: [7, 12, 6, 9, 20, 56, 89]

arr3: []

arr4: [0, 0, 0, 0, 0, 0]

function minValue (arr1) {
    let min = arr1[0] 
    for (let i = 0; i < arr1.length; i ++) {
        if (arr1[i] < min) {
            min = arr1[i];
        }
    }
    return min
}

let  arr1 = [3, 5, 1, 8, -3, 7, 8];
    let min1 = minValue(arr1);
    console.log(min1);
    
let  arr2 = [7, 12, 6, 9, 20, 56, 89]
    let min2 = minValue(arr2);
    console.log(min2);

//array 3
 
let  arr3 = []
    let min3 = minValue(arr3);
    console.log(min3);

function minValue(arr3) {
    if (arr3.length == 0)
        return -1;
    let min3 = arr3 [0]; 
    for (let i = 0; i < arr3.length; i ++) {
        if (arr3[i] < min3) {
            min3 = arr3[i];
        }
    } return min3
}

let  arr4 = []
    let min4 = minValue(arr4);
    console.log(min4);

function minValue(arr4) {
    if (arr4.length == 0)
        return -1;
    let min4 = arr4 [0]; 
    for (let i = 0; i < arr4.length; i ++) {
        if (arr4[i] < min4) {
            min4 = arr4[i];
        }
    } return min4
}

