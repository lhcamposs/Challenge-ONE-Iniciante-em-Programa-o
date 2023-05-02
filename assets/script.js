const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncrypt() {
    const textEncrypt = encrypt (textArea.value);
    message.value = textEncrypt;
    textArea.value = "";
}

function encrypt(stringEncrypt) {

    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
        if(stringEncrypt.includes(matrizCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }
    return stringEncrypt;
}

function btnDecrypt() {
    const textDecrypt = decrypt (textArea.value);
    message.value = textDecrypt;
    textArea.value = "";
}

function decrypt(stringDecrypt) {

    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
        if(stringDecrypt.includes(matrizCode[i][0])){
            stringDecrypt = stringDecrypt.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }
    return stringDecrypt;
}

const copyButton = document.getElementsByClassName('btn-copy')[0];
const copyTarget = document.querySelector('.message');

copyButton.addEventListener('click', () => {
    copyTarget.select();
    document.execCommand('copy');
});