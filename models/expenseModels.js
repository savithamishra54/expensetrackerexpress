const Sequelize = require('sequelize')
const sequelize=require('../utill/database')

const expense= sequelize.define('expenseTable',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    Amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Category:{
        type:Sequelize.STRING,
        allowNull:false,
    }
},{timeStamps:false})


module.exports=expense