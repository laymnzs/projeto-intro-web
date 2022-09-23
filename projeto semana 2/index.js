/*1. SEMANA 2.
    
 const objeto1 = {
    prato1: "macarrão com frango",
    valor1: 20,
    disponibilidade1: true,
    bebida1: ["cerveja", "água", "gin"]
  }



const objeto2 = {
   prato2: "frango com arroz",
   valor2: 15,
   disponibilidade2: true,
   bebida2: ["suco de caju", "suco de manga", "suco de maracujá"],
}
  
const objeto3 = {
   prato3: "feijoada",
   valor3: 30,
   disponibilidade3: false,
   bebida3: ["vinho", "champagne", "caipirinha"]
}



//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

 const restaurante = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

restaurante.push(prato1, prato2, prato3)
console.log(restaurante)



//4. Adicionar verificação antes de dar o push(antes de adicionar os objetos). A caraterística booleana do objeto deve ser validada.

if(objeto1.disponibilidade1){
  restaurante.push(objeto1)
  alert("O prato macarrão com frango \ foi adicionado ao array")
} else { 
  alert("O prato macarrão com frango \ não foi adicionado ao array")
}

console.log(restaurante)

//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push*/

if(objeto1.disponibilidade1){
  restaurante.push()
}