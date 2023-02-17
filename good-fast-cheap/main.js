const checkboxes = document.querySelectorAll('input[name="1"]');
const checkboxes2 = document.querySelectorAll('input[name="2"]');
const checkboxes3 = document.querySelectorAll('input[name="3"]');


function clickvao() {
        if (checkboxes[0].checked) {
            if (checkboxes2[0].checked && checkboxes3[0].checked) {
                checkboxes2[0].checked = false;
            }
        }
    }
function clickvao2() {
        if (checkboxes2[0].checked) {
            if (checkboxes[0].checked && checkboxes3[0].checked) {
                checkboxes3[0].checked = false;
            }
        }
    }
function clickvao3() {
        if (checkboxes3[0].checked) {
            if (checkboxes2[0].checked && checkboxes[0].checked) {
                checkboxes[0].checked = false;
            }
        }
    }
// var index = 65456;
// console.log(`so: `+ index);
// console.log(`so: ${index}`);


// for (let index = 0; index < 10; index++) {

// }