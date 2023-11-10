import themeSwitcher from "./js/themeSwitcher.js"
import copyToClipBoard from "./js/copyResult.js"
import calculate from "./js/calculate.js"
import { buttonHandler, clearBtn, keyBoardInput, input } from "./js/keysHandlers.js"
const buttons = document.querySelectorAll('.charKey')

input.addEventListener("keydown", keyBoardInput)

buttons.forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', buttonHandler)
})
document.getElementById('clear').addEventListener('click',  clearBtn)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)

const switchBtn = document.getElementById('themeSwitcher')
switchBtn.addEventListener('click', themeSwitcher)