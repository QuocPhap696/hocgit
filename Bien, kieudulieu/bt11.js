Vatly1 = prompt("vatly")
Hoahoc1 = prompt("hoahoc")
sinhhoc1 = prompt("sinhhoc")

let vatly = parseFloat(Vatly1);
let Hoahoc = parseFloat(Hoahoc1);
let sinhhoc = parseFloat(sinhhoc1);


let tongdiemtrungbinh1 = vatly + Hoahoc + sinhhoc;
let diemtrungbinh = (vatly + Hoahoc + sinhhoc) / 3;


document.write("tongdiemtrungbinh" + tongdiemtrungbinh1);
document.write('<br/>')
document.write("diemtrungbinh" + diemtrungbinh);

