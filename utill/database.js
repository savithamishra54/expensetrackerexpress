const Sequelize=require('sequelize')

const sequelize=new Sequelize('expense-table','root','savitha123',{
    dialect:'mysql',
   
})

module.exports=sequelize