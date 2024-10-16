






let inputData = document.getElementById('input-text');

let outPutData = document.getElementById('output-text');


function upCaseOperation(){
     const inputText = inputData.value;
     outPutData.value = inputText.toUpperCase();
};

function lowerCaseOperation(){
    const inputText = inputData.value;
    outPutData.value = inputText.toLowerCase();
}

function wordCountOpe(){
    const inputText = inputData.value;
    outPutData.value = inputText.length;
}

function charCountOpe(){
    const inputText = inputData.value;
    outPutData.value = inputText.split(" ").length;

}

