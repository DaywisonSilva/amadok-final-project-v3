// const primeiroValor = false // falso // boolean
// const segundoValor = true // verdadeiro // boolean

// const counjuncao = primeiroValor && segundoValor

// const disjuncao = primeiroValor || segundoValor

// const texto = "isabela, ..."

// const numero = 10

// const array = ["davi", "joão", 10, true]
                // 0          1         2         3
const buttons = ["button", "button", "button", "button"]

// Interação HTML

const botao = document.getElementsByTagName('button')[0]


botao.addEventListener("click", () => {
    window.alert("usuario clicou no botão")
})