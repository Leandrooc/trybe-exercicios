/* Exercício 1 */

let numbers = [5,9,3,19,70,8,100,2,35,27]

for ( index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

/* Exercício 2 */

let numbers2 = [5,9,3,19,70,8,100,2,35,27]
let soma = 0

for ( let index = 0; index < numbers2.length; index++) {
    soma += numbers2[index];
}

console.log(soma)

/* Exercício 3 */

let numbers3 = [5,9,3,19,70,8,100,2,35,27]
let soma3 = 0

for ( let index = 0; index < numbers3.length; index++) {
    soma3 += numbers3[index];
}

let media = soma3/numbers3.length

console.log(media)

/* Exercício 4 */

if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}

/* Exercício 5 */

let numbers4 = [5,9,3,19,70,8,100,2,35,27]
let big = 0

for ( index = 0; index < numbers4.length; index++) {
        if ( numbers4[index] > numbers4[index-1] && numbers4[index] > big) {
            big = numbers4[index]
    }
}

console.log("Maior número do array - " + big)

/* Exercício 6 */

let numbers5 = [5,9,3,19,70,8,100,2,35,27]
let impar = 0

for ( index = 0; index < numbers5.length; index++) {
    if (numbers5[index] % 2 != 0) {
        impar++
    }
}

if (impar == 0) {
    console.log("Nenhum valor ímpar encontrado");
}

console.log("O Array possui " + impar + " Números ímpares")

/* Exercício 7 */

let numbers6 = [5,9,3,19,70,8,100,2,35,27]
let low = numbers6[0]

for ( index = 0; index < numbers6.length; index++) {
        if ( numbers6[index] < numbers6[index-1]  && numbers6[index] < low) {
            low = numbers6[index]
    }
}

console.log("Menor número do array - " + low)

/* Exercício 8 */

let array = []
let tamanhoarray = 26

for ( index = 1; index < tamanhoarray; index++) {
    array.push(index)
}
console.log(array)

/* Exercício 9 */

for (index = 0; index < array.length; index++){
    console.log(array[index] / 2)
}

