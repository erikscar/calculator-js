export default function () {
    const main = document.querySelector('main')
    const root = document.querySelector(':root')

    if(main.dataset.theme === "dark") {
        root.style.setProperty('--bg-color', "#f1f5f9")
        root.style.setProperty('--border-color', "#131111")
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', "#ec7513")
        main.dataset.theme = "light"    
    }else {
        root.style.setProperty('--bg-color', "#212529")
        root.style.setProperty('--border-color', "#666")
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', "#f59140")
        main.dataset.theme = "dark"
    }
}