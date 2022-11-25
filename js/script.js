const rim = [1000, 900, 500, 400, 100,
             90, 50, 40, 10, 9, 5, 4, 1]

const rim1 = ['M', 'CM', 'D', 'CD', 'C', 'XC',
             'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

let numberInput = document.querySelector('.numberInput')
let RomanInput = document.querySelector('.romanInput')
let convertButtonNumber = document.querySelector('.numberButton')
let convertButtonRoman = document.querySelector('.RomanButton')
let resultRoman = document.querySelector('.resultRoman')
let resultNumber = document.querySelector('.resultNumber')



convertButtonNumber.addEventListener('click',() => {
    let userIinput = numberInput.value
    let index = 0
    
    if (userIinput > 3999 || userIinput < 1) {
        resultRoman.innerHTML = 'Допустимая область значений: [1 ... 3999]';
    } else {
        useranswer = ''
        while (userIinput > 0) {
            if (rim[index] <= userIinput) {
                userIinput -= rim[index]
                useranswer += rim1[index]
            } else {
                index = index + 1
            }
        }
        resultRoman.innerHTML = useranswer
        historyFuc(numberInput.value, useranswer)
    }
} )



convertButtonRoman.addEventListener('click',() => {
    let userIinput = RomanInput.value.split('')
    let len = (userIinput).length
    let index = 0
    let useranswer = 0

    
    while ((userIinput).length > index) {
        if(index + 1 > len){
            useranswer += rim[rim1.indexOf(userIinput[index])]
        } else {
            if (rim[rim1.indexOf(userIinput[index])] < rim[rim1.indexOf(userIinput[index + 1])]) {
                useranswer += (rim[rim1.indexOf(userIinput[index + 1])]) - (rim[rim1.indexOf(userIinput[index])])
                index += 2
            } else {
                useranswer += (rim[rim1.indexOf(userIinput[index])])
                index += 1
            }
            
        }
    }


    index = 0
    if (useranswer > 3999) {
        resultNumber.innerHTML = 'Допустимая область значений: [1 ... 3999]'
    } else {
        resultNumber.innerHTML = useranswer
        historyFuc(RomanInput.value, useranswer)
    }
    


})


