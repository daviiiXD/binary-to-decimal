const binarySource = document.getElementById('nbr-input')
const button = document.getElementById('submit')
const result = document.getElementById('result')
let binaryString
let string = []
let keys = ['1','0']
function start() {
    // restart
    binaryString = ''
    string = []
    exponential = 1
    sum = 0
    binaryString = binarySource.value
    translation()
}
function translation() {
    // translation
    for(let i = 0; i < binaryString.length; i++) {
        string.push(binaryString[i])
    }
    var exponential = 1
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] == 1) {
            string[i] = exponential
        }
        if (string[i] == 0) {
            string[i] = 0
        }
        exponential *= 2
    }
    var sum = 0
    for (let i = 0; i < string.length; i++) {
        sum += parseInt(string[i])
    }
    result.innerHTML = 'Decimal: ' + sum
}
button.addEventListener('click', start)
