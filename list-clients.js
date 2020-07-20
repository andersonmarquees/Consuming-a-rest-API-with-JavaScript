const removeCliente = id => {
    if(confirm("Deseja deletar cliente ?")) {
        deletarClient(id)
    }
}

const table = document.querySelector('[data-content-table]')

const showClient = (cpf, name, id) => {
    const lineTr = document.createElement('tr')

    const line = `
        <td>${cpf}</td>
        <td>${name}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">
        Excluir</button>
    `
    lineTr.innerHTML = line

    return lineTr
}

listClients().then(show => {
    show.forEach(index => {
        table.appendChild(showClient(index.cpf, index.nome, index.id))
    })
})

