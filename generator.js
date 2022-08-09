const resultEl = document.querySelector('.generator__result');
const lengthEl = document.querySelector('.generator__length');
const uppercaseEl = document.querySelector('.generator__uppercase');
const lowercaseEl = document.querySelector('.generator__lowercase');
const numbersEl = document.querySelector('.generator__numbers');
const symbolsEl = document.querySelector('.generator__symbols');
const clipboardEl = document.querySelector('.generator__clipboard');
const generateEl = document.querySelector('.generate__button');

const randomFunc = {
    hasLower: getRandomLower,
    hasUpper: getRandomUpper,
    hasNumbers: getRandomNumber,
    hasSymbols: getRandomSymbols
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied successfully!')
})

generateEl.addEventListener('click', () => {

    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked

    resultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length);

})

function generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length) {

    let generatedPassword = ''
    const typesCount = hasLower + hasUpper + hasNumbers + hasSymbols;
    const typesArray = [{
        hasLower
    }, {
        hasUpper
    }, {
        hasNumbers
    }, {
        hasSymbols
    }]

    const filteredTypesArray = typesArray.filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        filteredTypesArray.forEach(item => {
            const funcName = Object.keys(item)[0];
            generatedPassword += randomFunc[funcName]();
        })

    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}

function getRandomSymbols() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)

}