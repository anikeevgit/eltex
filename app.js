let numInput = document.querySelector('#num-input')
let resultInput = document.querySelector('#result-input')
let resultInput2 = document.querySelector('#result-input2')
let resultInput3 = document.querySelector('#result-input3')
let symbInput = document.querySelector('#symb-input')
let numbInput = document.querySelector('#numb-input')
let button = document.querySelector('#button')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let firstP = document.querySelector('#first')
let secondP = document.querySelector('#second')
var result = ''
var result2 = ''
var result3 = ''

button.addEventListener('click', function () {
  let str = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  let num = numInput.value

  for (let i = 0; i < num; i++) {
    result += str[getRandom(0, str.length - 1)]
  }

  resultInput.value = result
  resultInput2.value = result
})

button2.addEventListener('click', function () {
  let search = /[\p{Alpha}]/gsu
  let str = result.split('')
  let str2 = result.match(search)
  let symb = symbInput.value
  let c = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str[i] == str2[j]) {
        str[i] = symb
        c++
      }
    }
  }
  firstP.value = `Повторений ${symb} = ${c}`
  result2 = str.join('')
  resultInput2.value = result2
  resultInput3.value = result2
})

button3.addEventListener('click', function () {
  let str = result2.split('')
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let numb = numbInput.value
  let o = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (str[i] == num[j]) {
        str[i] = numb
        o++
      }
    }
  }
  secondP.value = `Повторений ${numb} = ${o}`
  result3 = str.join('')
  resultInput3.value = result3
})

function getRandom(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min
}
