/* Exercício 1 */

const a = 25
const b = 15
console.log(" Exercício 1")

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* Exercício 2 */

if (a > b) {
    console.log(" Exercício 2  - " + " A - " + a)
} else {
    console.log(" Exercício 2  - " + " B - " + b)
}

/* Exercício 3 */

const c = 20
const d = 22
const e = 19

if ( c > d && c > e ) {
    console.log(" Exercício 3 - " + " C " + c)
} else if (d > c && d > e) {
    console.log(" Exercício 3 - " + " D - " + d)
} else {
    console.log(" Exercício 3 - " + " E - " + e)
}

/* Exercício 4 */

const f = -16
if ( f > 0) {
    console.log("Exercício - 4 - Positive ")
} else if ( f == 0) {
    console.log("Exercício - 4 - zero ")
} else {
    console.log("Exercício - 4 - Negative ")
}

/* Exercício 5 */

const angulo1 = 90
const angulo2 = 45
const angulo3 = 46

if (angulo1 + angulo2 + angulo3 == 180) {
    let z = true
    console.log("Exercício 5 - " + z)
} else {
    let z = false
    console.log("Exercício 5 - " + z + " - O triângulo não pode ter " + (angulo1+angulo2+angulo3) + " graus")
}


/* Exercício 6 */

console.log("Exercício 6")

function xadrez (y) {
    let lower = y.toLowerCase()
    if ( lower === "rei") {
        console.log("O rei pode mover-se em todas as direções, somente uma casa por vez")
    } else if ( lower === "rainha") {
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais, mas não pode pular outras peças")
    } else if ( lower === "bispo") {
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
    } else if ( lower === "cavalo") {
        console.log("A cavalo é a única peça que pode pular as outras, seu movimento é em formato de L")
    } else if ( lower === "torre") {
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular peças")
    } else if ( lower === "peão") {
        console.log("O peão movimenta-se apenas uma casa para frente, ou duas no seu primeiro movimento do jogo")
    } else if ( lower === "peao") {
        console.log("Digite peão para saber os movimentos do peão")
    } else {
        console.log("Peça inválida")
    }

}

xadrez("Rainha")
xadrez("peãO")
xadrez("BisPo")
xadrez("torre")
xadrez("peçaestranha")

/* Exercício 7 */

console.log("Exercício 7")

function notas(n) {
      if( n >= 90) {
        return "Nota - A"
    } else if ( n >= 80) {
        return "Nota - B"
    } else if ( n >= 70) {
        return "Nota - C"
    } else if ( n >= 60) {
        return "Nota - D"
    } else if ( n >= 50) {
        return "Nota - E"
    } else if ( n < 50) {
        return "Nota - F"
    }
}

console.log(notas(99))
console.log(notas(56))
console.log(notas(33))
console.log(notas(81))

/* Exercício 8 */

console.log(" Exercício 8")

const n1 = 2
const n2 = 3
const n3 = 4

if ( n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
    let t = true
    console.log(t)
} else {
    let t = !true
    console.log(t)
} 

/* Exercício 9 */

console.log(" Exercício 9")

const m1 = 2
const m2 = 6
const m3 = 8

if ( m1 % 2 !== 0 || m2 % 2 !== 0 || m3 % 2 !== 0){
    let t = true
    console.log(t)
} else {
    let t = !true
    console.log(t)
} 

/* Exercício 10 */

console.log(" Exercício 10")

function lucro(produto,venda,quantidade) {

    let total = produto + ((produto/100)*20)
    let lucro = venda - total
    let lucrototal = lucro * quantidade
    console.log(lucrototal)

}

lucro(200,320,1000);
lucro(220,340,1200);