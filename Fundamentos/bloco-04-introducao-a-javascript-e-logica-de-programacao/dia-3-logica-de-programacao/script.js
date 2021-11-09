/* Exercício 1 */ 

console.log("Exercício 1")

n = 10
asterisco = "*"
linhas = ""

for (index = 0; index < n; index++) {
    linhas = linhas += asterisco

}

for (index = 0; index < n; index++) {
        console.log(linhas)
}

/* Exercício 2 */ 

console.log("Exercício 2")

n2 = 6
asterisco2 = "*"
linhas2 = ""

for (index = 0; index < n2; index++) {
       linhas2 += asterisco2

       console.log(linhas2)
        
}

/* Exercício 6 */ 

let numeroprimo = 32
let divisores = [];

for( index = 0; index <= numeroprimo; index ++) {

    if (numeroprimo % index === 0 && numeroprimo > 0){
        divisores.push(index)
    }

    if (index == numeroprimo && divisores.length == 2) {

        console.log(" É um número primo, pois possui apenas 2 divisores, 1 e", divisores[1])
        console.log(divisores)

    }  
    
    if (index == numeroprimo && divisores.length > 2) {

        console.log(" Não é um número primo, pois possui mais de apenas 2 divisores.")
        console.log(divisores)

    }

} 


/* Aula ao vivo exercício, funcionalidade adicionada */

let qtd = 10;
let ingredientes = ["presunto","maionese"];
let sacola = [];
let intolerante = false


for(let index = 0; index < 10; index+=1){

let pao = [];

for( let index = 0; index < ingredientes.length; index+=1){
pao.push(ingredientes[index])

}
sacola.push(pao);

if(intolerante === false) {
    pao.push("queijo")
}

} 

console.log(sacola)
