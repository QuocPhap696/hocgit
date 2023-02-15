
function buttonHandler(value){
    document.getElementById("maytinh").value += value; }


function ketqua () {
    let a = eval(
        document.getElementById("maytinh").value
    );
    document.getElementById("maytinh").value = a;

}
function del () {
    document.getElementById('maytinh').value = "";
}