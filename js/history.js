
let history = document.querySelector('.history')

historyFuc = (a, b) => {
    let newitem = document.createElement('span')
    newitem.setAttribute('class', 'historyItem')
    history.appendChild(newitem)
    newitem.innerText = ` ${a} to ${b} `
}
