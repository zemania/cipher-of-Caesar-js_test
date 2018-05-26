//зашифровка
document.getElementById('cipher').oninput = function() {
    //из кода в символ String.fromCharCode
    //из символа в код str.charCodeAt

    const offset = 3;
    let str = this.value;
    let out = '';

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code += offset;
        out += String.fromCharCode(code);
    }

    document.getElementById('outCipher').innerHTML = out;
}

//расшифровка
document.getElementById('decipher').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = '';

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code -= offset;
        out += String.fromCharCode(code);
    }

    document.getElementById('outDecipher').innerHTML = out;
}