const listClients = () => {
    return fetch('http://localhost:4000/clientes')
        .then(response => response.json())
        .then(json => json)
}

const cadastrarClientes = (cpf, nome) => {
    const json = JSON.stringify({
        nome,
        cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:json
    })
    .then(resp => resp.body)
}


const deletarClient = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
        method: 'DELETE'
    })
}

const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,
    {
        method: 'GET'
    }).then(resp => {
        return resp.json()
    })
}

const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome,
        cpf
    })
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:json
    })

}