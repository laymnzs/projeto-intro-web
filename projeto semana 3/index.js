/*1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.*/

const objeto1 = {
    prato: "macarrão com frango",
    valor: 20,
    disponibilidade: true,
    bebida1: ["cerveja", "água", "gin"]
  }

  const objeto2 = {
    prato: "frango com arroz",
    valor: 15,
    disponibilidade: true,
    bebida2: ["suco de caju", "suco de manga", "suco de maracujá"],
 }

 const objeto3 = {
  prato: "feijoada",
  valor: 30,
  disponibilidade: false,
  bebida3: ["vinho", "champagne", "caipirinha"]
}


// SEMANA 3 -Exercicio 1

let bebida1String= ""
  for(let i=0; i<objeto1.bebida1.length; i++){
    bebida1String += objeto1.bebida1[i] + ","
  }


  let bebida2String= ""
  for(let i=0; i<objeto2.bebida2.length; i++){
    bebida2String += objeto2.bebida2[i] + ","
  }


  let bebida3String= ""
  for(let i=0; i<objeto3.bebida3.length; i++){
    bebida3String += objeto3.bebida3[i] + ","
  }

  console.log(bebida1String)
  console.log(bebida2String)
  console.log(bebida3String)



//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.*/


let objetos1 = [{
  prato: "macarrão com frango",
  valor: 20,
  disponibilidade: true,
  bebida: ["cerveja", "água", "gin"],
},
{
    prato: "frango com arroz",
    valor: 15,
    disponibilidade: true,
    bebida: ["suco de caju", "suco de manga", "suco de maracujá"],
 },
 {
    prato: "feijoada",
    valor: 30,
    disponibilidade: false,
    bebida: ["vinho", "champagne", "caipirinha"]
 }]

for(objt1 of objetos1){
for (propriedade in objt1){
      console.log(`${propriedade}: ${objt1[propriedade]}`)
  }  
console.log("----------------------");
}


//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


function parametro(devolveString){
  for(i in devolveString){
    console.log(`${i}: ${devolveString[i]}`)
  }
  console.log("----------------------");
} 

parametro(objeto1)
parametro(objeto2)
parametro(objeto3)



//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

const novoArray = [objeto1, objeto2, objeto3]

function pedePrato(array, string){
const buscaPrato = array.filter((elemento) => {
  if(elemento.prato === string){
    return elemento

  }
})

if(buscaPrato.length === 0){
  alert("Prato não encontrado")
}else{
  console.log(buscaPrato);
  } 
}
pedePrato(novoArray, "feijoada")