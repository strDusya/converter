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

let userIinput = 0
let useranswerSTR = ''
let useranswerINT = 0




convertButtonNumber.addEventListener('click',(useranswerSTR) => {
    userIinput = numberInput.value
    let index = 0

    
    if (userIinput > 3999) {
        resultRoman.innerHTML = 'Допустимая область значений: [1 ... 3999]';
    } else {
        while (userIinput > 0) {
            if (rim[index] <= userIinput) {
                userIinput -= rim[index]
                useranswerSTR += rim1[index]
            } else {
                index = index + 1
            }
        }
        index = 0
        resultRoman.innerHTML = useranswerSTR.substring(21, )
    }
} )



convertButtonRoman.addEventListener('click',(useranswerINT) => {
    userIinput = RomanInput.value.split('')
    let len = (userIinput).length
    let index = 0
    let summ = 0

    while ((userIinput).length > index) {
        if(index + 1 > len){
            summ += rim[rim1.indexOf(userIinput[index])]
        } else {
            if (rim[rim1.indexOf(userIinput[index])] < rim[rim1.indexOf(userIinput[index + 1])]) {
                summ += Number(rim[rim1.indexOf(userIinput[index + 1])]) - Number(rim[rim1.indexOf(userIinput[index])])
                index += 2
            } else {
                summ += Number(rim[rim1.indexOf(userIinput[index])])
                index += 1
            }
            
        }
    }
    useranswerINT = summ
    summ = 0
    index = 0
    resultNumber.innerHTML = useranswerINT
})