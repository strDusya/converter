const rim = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

const rim1 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

let numberInput = document.querySelector('.numberInput')
let convertButton = document.querySelector('.numberButton')
let result = document.querySelector('.result')

let userIinput = 0
let useranswer = ''
let index = 0

convertButton.addEventListener('click', function(useranswer){
    userIinput = numberInput.value

    if (userIinput > 3999, userIinput < 1) {
        result.innerHTML = 'Допустимая область значений: [1 ... 3999]'
    } else {
        while (userIinput > 0) {
            if(rim[index] <= userIinput){
                userIinput = userIinput - rim[index]
                useranswer = useranswer + rim1[index]
                console.log(userIinput)
            } else {
                index = index + 1
            }
        }
    
        index = 0
        userIinput = 0
        result.innerHTML = useranswer.substring(21, )
    }
} )
