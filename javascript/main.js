const inpt = document.getElementById('pole');
const result = document.getElementById('result');
let range = [];
let index = 0;
let k = 0;
let flag = false;
let inputValue = null;

function fillArray(firstItem, num) {
    range = [];
    for (let i = firstItem; i <= num; i += 1) {
        range.push(i);
    }
    //console.log(range);
}

function removeNumberMultiple(arr, multipleNumber) {
    // range.push(multipleNumber);
    for (let i = multipleNumber; i < arr.length; i += 1) {
        if (arr[i] % multipleNumber == 0) {
            arr.splice(i, 1);
        }
    }
    //console.log(range);
}

inpt.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        inputValue = this.value - 1;
        fillArray(2, inputValue);
        for (let i = 2; i < Math.sqrt(inputValue); i++) {
            k++
            removeNumberMultiple(range, i);
            console.log(i);
        }
        console.log("Tyle razy sie wykonalo", k);
        result.textContent = range;

    }
})








// inpt.addEventListener("keypress", function (e) {
//     if (e.keyCode == 13) {
//         inputValue =this.value-1;
//         fillArray(2,inputValue);
//         for ( range[index]; range[index] < Math.sqrt(inputValue); index++) { 
//             removeNumberMultiple(range,range[index]);
//             k++
//             // console.log(range[index]);
//             // console.log(range);
//         }
//         console.log("Tyle razy sie wykonalo",k);
//     }
// })