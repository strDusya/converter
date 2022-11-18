let loginoButton = document.querySelector('.ligino')
let registrButton = document.querySelector('.registr')

let secLog = document.querySelector('.log')
let secReg = document.querySelector('.reg')

loginoButton.addEventListener('click', () => {
    secReg.style.display = 'none';
    secLog.style.display = 'flex';
    loginoButton.style.background = '#c77dff'
    registrButton.style.background = '#e0aaff'
})

registrButton.addEventListener('click', () => {
    secReg.style.display = 'flex';
    secLog.style.display = 'none';
    registrButton.style.background = '#c77dff'
    loginoButton.style.background = '#e0aaff'
})