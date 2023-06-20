var axios = require('axios')

module.exports.list = () => {
    return axios.get('http://localhost:16016/repairs')
        .then(resposta => {
            return resposta.data
        })
        .catch(err => {
            return err
        })
}

module.exports.getById = id => {
    return axios.get('http://localhost:16016/repairs/'+id)
        .then(resposta => {
            return resposta.data
        })
        .catch(err => {
            return err
        })
}

module.exports.listByMarca = marca => {
    return axios.get('http://localhost:16016/repairs?marca='+marca)
        .then(resposta => {
            return resposta.data
        })
        .catch(err => {
            return err
        })
}