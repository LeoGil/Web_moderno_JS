//Criar funcao de forma literal
function fun1() {

}

//Armazenar em uma variavel
const fun2 = function () {

}

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

//Armazenar em atributos de objetos
const obj = {}
obj.falar = function () { return 'opa!' }

console.log(obj.falar())

//Passar uma funcao com param para outra
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

//Uma funcao pode rentornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)