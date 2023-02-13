let imgObj = null
imgObj = document.getElementById('traibanh');
function init( ) {
    imgObj = document.getElementById ("traibanh");
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseFloat(imgObj.style.left) + 10 + 'px' ;
}
window. onload = init;