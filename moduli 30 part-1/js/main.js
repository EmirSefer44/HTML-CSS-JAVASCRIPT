// var x = 5;

// if(x>2) {
//     console.log("True");
// }else {
//     console.log("false");
// }



// var input = document.getElementById('input_id');
// var button = document.getElementById('btn_id');
// var text = document.getElementById('text_id');

// button.onclick = function() {

//     text.innerHTML = input.value;
// }

var input1 = document.querySelector('#input1_id');
var input2 = document.querySelector('#input2_id');
var btn2 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');

btn2.addEventListener("click",function() {
    ans.innerHTML = pasteInt(input1.value) +parseInt(input2.value);
});