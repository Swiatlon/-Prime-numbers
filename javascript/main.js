const inpt = document.getElementById('pole');
const result = document.getElementById('result');
let range = [];
let index = 0;
let inputValue = null;

function fillArray(firstItem, num) {
    range = [];
    for (let i = firstItem; i <= num; i++) {
        range.push(i);
    }
}

function removeNumberMultiple(arr, multipleNumber) {
    for (let i = multipleNumber; i < arr.length; i++) {
        if (arr[i] % multipleNumber == 0) {
            arr.splice(i, 1);
        }
    }
}

inpt.addEventListener("keypress", function (e) {
     if (e.keyCode == 13) {
        inputValue = this.value-1;
         fillArray(2,inputValue);
         for ( range[index]; range[index] < Math.sqrt(inputValue); index++) { 
             removeNumberMultiple(range,range[index]);
         }
     }
})

//inpt.addEventListener("keypress", function (e) {
//   if (e.keyCode == 13) {
//        inputValue = this.value - 1;
//        fillArray(2, inputValue);
//        for (let i = 2; i < Math.sqrt(inputValue); i++) {
//            removeNumberMultiple(range, i);
//            console.log(i);
//        }
//        result.textContent = range;
//    }
//})
