function myFunction() {
let weight = Number(document.getElementById("weight").value);
let height = Number(document.getElementById("height").value);
bmi = (weight/(height * 2));
if (bmi < 18){
        document.write('Underweight');}
        else if (bmi < 25)  {
        document.write('Normanl');}
        else if (bmi < 30.0) {
        document.write('Overweight');}
        else 
        document.write('Obese');
}
