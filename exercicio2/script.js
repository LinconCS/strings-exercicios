const minhaString = 'Eu não sou supersticioso, mas sou um pouco ________.      ';

function retirarEspacosESubstituir(frase){

const remocao = frase.trim()
const tamanhoString = frase.length
const tamanhoStringRemocao = remocao.length
const substituirNaFrase = remocao.replaceAll('________', 'sticioso') 

console.log(remocao)
console.log('Quantidade de caracteres na frase sem remoção dos espaços:', tamanhoString)
console.log('Quantidade de caracteres na frase com remoção dos espaços:', tamanhoStringRemocao)
console.log(substituirNaFrase)
}

const novaString = retirarEspacosESubstituir(minhaString)






