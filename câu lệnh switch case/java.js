let thang1 = "1";
let thang2 = "2";
let thang3 = "3";
let thang4 = "4";
let thang5 = "5";
let thang6 = "6";
let thang7 = "7";
let thang8 = "8";
let thang9 = "9";
let thang10 = "10";
let thang11 = "11";
let thang12 = "12";

function myFunction() {
    let month = document.getElementById("month").value;
    switch (month) {
        case thang1:
        case thang3:
        case thang5:
        case thang7:
        case thang8:
        case thang10:
        case thang12:
   document.getElementById("result").innerHTML = "Tháng" + month + "có 31 ngày";
        break;
  
        case thang4:
        case thang6:
        case thang9:
      document.getElementById("result").innerHTML = "Tháng" + month + "có 30 ngày";
        break;
        case thang2:
   document.getElementById("result").innerHTML = "Tháng" + month + "có 28 hoặc 29 ngày"; 
}
}
