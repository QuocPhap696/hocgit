function len(){
    let element = document.getElementById("nguoisat");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function xuong(){
    let element = document.getElementById("nguoisat");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function trai(){
    let element = document.getElementById("nguoisat");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function phai(){
    let element = document.getElementById("nguoisat");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
        len();
        break;

        case 40:
        xuong();
        break;

        case 37:
        trai();
        break;

        case 39:
        phai();
        break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}

