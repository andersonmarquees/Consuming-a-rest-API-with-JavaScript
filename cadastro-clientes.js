const formCadastroClientes = document.querySelector('[data-form]')

formCadastroClientes.addEventListener("submit", event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]')
  
    const cpf = event.target.querySelector('[data-cpf]')

    cadastrarClientes(cpf.value, nome.value)
})
