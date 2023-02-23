// Luyện tập viết hàm:
// 1. Hàm tính tổng các giá trị trong mảng
// 2. Hàm hiển thị các số chẵn trong mảng
// 3. Hàm hiển thị các số nguyên tố của mảng
// 4. Hàm tìm giá trị lớn nhất của mảng
// 5. Hàm tìm giá trị bé nhất của mảng
// 6. Hàm nối 1 mảng khác
// 7. Hàm đảo ngược mảng
// 8. Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào
// 9. Hàm tìm vị trí của một số trong mảng, nếu không tìm thấy trả về -1
// 10.Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng (edited) 

// bt1 (tính tổng của hàm)
// let num = [2, 7, 5, 4, 9];
// let sum = 0;
// function total(num) {
//     for (i = 0; i < num.length; i++)
//    sum += num[i];

// }
// total(num);
// console.log(sum);

// bt2 (hiển thị số chẵn)
// let num = [2, 7, 5, 4, 9];
// let sum = 0;
// function evenArray(num) {
//     for(i = 0; i < num.length; i++){
//         if(num[i] % 2 == 0) {
//             sum = num[i];
//             console.log(sum);
//         } 
// }  
// }
// evenArray(num)

// bt3 (hiển thị các số nguyên tố của mảng)

// let num = [2, 7, 5, 4, 9];
// let sum = 0;
// function test_prime(n) {
//     if (n === 1) {
//         return false;
//     }
//     else if (n === 2) {
//         return true;
//     } else {
//         for (var x = 2; x < n; x++) {
//             if (n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// function evenArray(num) {
//     for (let i = 0; i < num.length; i++) {
//         if (test_prime(num[i])) {
//             console.log(num[i]);
//         }
//     }
// }
// evenArray(num)

// bt4 (tìm giá trị lớn nhất của mảng)

// let num = [2, 7, 5, 4, 9];
// let max = num[0];
// function maxArray(num) {
//     for( i = 0; i < num.length; i++) {
//          if (num[i] > max) {
//             max = num[i];

//          }
//         }
//     }

// maxArray(num)
// console.log(max);

// bt5 (Hàm tìm giá trị bé nhất của mảng)
// let num = [2, 7, 5, 4, 9];
// let min = num[0];
// function array (num) {
//     for (i = 0; i < num.length; i ++) {
//         if ( num[i < min]) {
//             min = num[i]
//         }
//     }
// }
// array(num);
// console.log(min);

// bt6 (Hàm nối 1 mảng khác)

// let num = [2, 7, 5, 4, 9];
// let sum = [ 4, 7, 10, 7, 10, 7, 10];
// const array = num.concat(sum);
// console.log(array);

// bt7(Hàm đảo ngược mảng)

// let numbers = [2, 7, 5, 4, 9];
// numbers.reverse().join ()
// console.log(numbers);

// bt8(Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào)
// let numbers = [2, 7, 5, 4, 9];
// let a = numbers.join("*")
// console.log(a);

// bt9(Hàm tìm vị trí của một số trong mảng, nếu không tìm thấy trả về -1)

// let numbers = [ 2, 3, 9, 10, 1, 6] ;
// console.log(numbers.indexOf(7));

// bt10(Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng)

// let numbers = [2, 3, 7, 9, 1, 0];
// numbers.push(12);
// console.log(numbers);




// function chay5dongcode() {
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);
//     console.log(` $$$$$$$$$` + `$$$$$$$$$$$$$`);  
// }




// function choigame(so1, so2, ketqua) {
//     if (so1 + so2 == ketqua) {
//         chay5dongcode()
//     } if (ketqua == 555) { // so may
//         chay5dongcode()
//         console.log();
        
//     } else (

//         console.log(`so1 + so2 sai ket qua`)
//     )
// }

// choigame(1,9,555)









