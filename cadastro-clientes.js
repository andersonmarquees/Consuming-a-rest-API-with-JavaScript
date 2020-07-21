const formCadastroClientes = document.querySelector('[data-form]')

formCadastroClientes.addEventListener("submit", event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]').value
  
    const cpf = event.target.querySelector('[data-cpf]').value


    if(validaCPF(cpf)) {
        cadastrarClientes(cpf, nome)
    }else {
        alert('CPF Inválido !')
    }
    
})
