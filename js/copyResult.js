export const resultInput = document.getElementById('result')
export default function copyToClipBoard(ev) {
    if(ev.currentTarget.innerText === "Copy") {
        navigator.clipboard.writeText(resultInput.value)
        ev.currentTarget.innerText = "Copied!"
        ev.currentTarget.classList.add('success')
    }else {
        ev.currentTarget.innerText = "Copy  "
        ev.currentTarget.classList.remove('success')

    }
}