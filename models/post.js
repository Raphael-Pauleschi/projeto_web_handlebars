const db = require("./banco")
const Sequelize = db.Sequelize
const sequelize = db.sequelize

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.STRING
    },
    origem:{
        type: Sequelize.STRING
    },
    data_contato:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.TEXT
    }
})

module.exports = Agendamentos