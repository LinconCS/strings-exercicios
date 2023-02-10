// Versão aspas simples
const mensagem1 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

// Versão aspas duplas
const mensagem2 = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(mensagem1)

const trocaPalavrasEVerifica = function(frase){

const trocaPalavras = frase.replace('verde', 'rosa').replace('azul', 'laranja')
const incluiVerde = trocaPalavras.includes('verde')
const incluiLaranja = trocaPalavras.includes('laranja')
const mensagemExtra = trocaPalavras.replace('BOAS VINDAS, mas não deixe o gato sair', 'BOAS VINDAS, MAS NÃO DEIXE O GATO SAIR')

console.log(trocaPalavras)
console.log(incluiVerde)
console.log(incluiLaranja)
console.log(mensagemExtra)
}

const novaMensagem = trocaPalavrasEVerifica(mensagem1)
