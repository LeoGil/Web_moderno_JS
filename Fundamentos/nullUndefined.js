let valor // nao inicializada

console.log(valor)

valor = null // significa ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir UNDEFINED
console.log(produto.preco)

//delete produto.preco
//console.log(produto)

produto.preco = null //sem preco
console.log(produto)