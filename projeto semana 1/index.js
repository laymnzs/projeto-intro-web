
// Exercício 1: Semana 1
// Pensão

//2)

const prato1 = "macarrão com frango"
const valor1 = 20
const disponibilidade1 = true
const bebida1 = ["cerveja", "água", "gin"]

const prato2 = "frango com arroz"
const valor2 = 15
const disponibilidade2 = true
const bebida2 = ["suco de caju", "suco de manga", "suco de maracujá"]


const prato3 = "feijoada"
const valor3 = 30
const disponibilidade3 = false
const bebida3 = ["vinho", "champagne", "caipirinha"]


//3) A média deve ser igual à soma dos itens, dividida pelo total de itens.
const valor = ((valor1 + valor2 + valor3)/3)
console.log(`Média dos valores dos pratos: ${valor}`)


//4) Com um console.log, imprima o resultado de uma operação lógica 
//que checa se todos os valores de variáveis booleanas criadas até aqui
// são verdadeiras.

const verificaDisponibilidade = (disponibilidade1 && disponibilidade2 && disponibilidade3)
console.log(verificaDisponibilidade)


//5) Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

//Foi criado uma característica: bebidas


//6) Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui.

//a) O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log(`Pensão: ${prato1.toUpperCase()}\nValor do prato: ${valor1}\nDisponibilidade: ${disponibilidade1}\nBebidas: ${bebida1}`)

console.log(`Pensão: ${prato2.toUpperCase()}\nValor do prato: ${valor2}\nDisponibilidade: ${disponibilidade2}\nBebidas: ${bebida2}`)

console.log(`Pensão: ${prato3.toUpperCase()}\nValor do prato: ${valor3}\nDisponibilidade: ${disponibilidade3}\nBebidas: ${bebida3}`)





















