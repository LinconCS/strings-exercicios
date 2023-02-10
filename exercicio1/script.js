const comidasFavoritas = (nome, comida1, comida2, comida3) => {
// Versão template strings
const mensagem =`Estas são as comidas favoritas de ${nome}:
- Comida1: ${comida1}
- Comida2: ${comida2}
- Comida3: ${comida3}`

console.log(mensagem)

// Versão concatenada
const mensagemConcatenada = 'Estas são as comidas favoritas de ' + nome + ':' + '\n' + '- ' + 'Comida1' + ': ' + comida1 + '\n' + '- ' + 'Comida2' + ': ' + comida2 + '\n' + '- ' + 'Comida3' + ': ' + comida3

console.log(mensagemConcatenada)
}
const nome = prompt('Qual é o seu nome?')
const comida1 = prompt('Informe uma de suas comidas favoritas?')
const comida2 = prompt('Informe uma segunda comida das suas favoritas?')
const comida3 = prompt('Informe uma terceira comida das suas favoritas?')    
    
comidasFavoritas(nome, comida1, comida2, comida3)