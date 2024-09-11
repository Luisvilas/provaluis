//1º Exercicio
function gerarnumero(tamanho){
    let numeros = []
    for(let i = 1; i < tamanho; i++){
        numeros.push(Math.floor(Math.random()*11));
    }
    return numeros;
}
let numerosaleatorios = gerarnumero(11);
//console.log(numerosaleatorios);

//2º Exercício
function elementoMaisFrequente(frequente) {
    if (frequente.length === 0) {
        console.log("Array vazio");
        return;
    }

    const frequencia = {};
    let maior = null;
    let ocorrenciasMaior = 0;

    for (let i = 0; i < frequente.length; i++) {
        const num = frequente[i];
        frequencia[num] = (frequencia[num] || 0) + 1;
    }

    for (const num in frequencia) {
        if (frequencia[num] > ocorrenciasMaior) {
            maior = num;
            ocorrenciasMaior = frequencia[num];
        }
    }

    if (ocorrenciasMaior === 0) {
        console.log("Não há elemento mais frequente");
    } else {
        console.log("Elemento mais frequente:", maior);
        return maior; 
    }
}

const tamanho = 11; 
const valorMinimo = 1; 
const valorMaximo = 10; 
const numAle=numerosaleatorios
const arrayAleatorio = gerarnumero(tamanho, valorMinimo, valorMaximo);
console.log("Array gerado:", numAle);

const elementoFrequente = elementoMaisFrequente(arrayAleatorio);
//3º exercício
function removerRepetidos(array) {
    const conjunto = new Set(array);
    return Array.from(conjunto);
}
const remov = removerRepetidos()
console.log(remov) 

//4º exercício
lista=[7,9,3,2]

const somelist= numAle.concat(lista);
console.log(somelist)

//5º exercício
function main(){
     funct = (numAle, elementoFrequente, remov, somelist)
} return(main())



