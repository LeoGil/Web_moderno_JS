class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('Leonardo')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = pessoa('Johnny')
p2.falar()