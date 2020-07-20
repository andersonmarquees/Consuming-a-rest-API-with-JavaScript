const table = document.querySelector('[data-content-table]')

const showClient = (cpf, name) => {
    const lineTr = document.createElement('tr')

    const line = `
        <td>${cpf}</td>
        <td>${name}</td>
    `
    lineTr.innerHTML = line

    return lineTr
}

listClients().then(show => {
    show.forEach(index => {
        table.appendChild(showClient(index.cpf, index.nome))
    })
})

