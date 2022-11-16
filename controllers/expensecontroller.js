const expenseModel=require('../models/expenseModels')


const addExpense=async (req,res)=>{
    let info={
        Amount:req.body.Amount,
        Description:req.body.Description,
        Category:req.body.Category 
    }
    try{
        const userExpense=await expenseModel.create(info)
        res.status(200).json(userExpense)
    }
    catch(err){
       console.log(err) 
    }   
}
const getAllExpenses=async (req,res)=>{
    try{
        const userExpense=await expenseModel.findAll()
        res.status(200).json(userExpense)
    }
    catch(err){
        console.log(err)
    }
}

const getOneExpenxse=async (req,res)=>{
    try{
         let id=req.params.id
        const userExpense=await expenseModel.findAll({whare:{id:id}})
        res.status(200).json(userExpense)
    }
    catch(err){
        console.log(err)
    }
}
const deleteExpence=async (req,res)=>{
    try{
        let id=req.params.id
        await expenseModel.destroy({where:{id:id}})
        res.status(200).send('expense deleted')
    }
    catch(err){
        console.log(err)
    }
}
const editExpence=async (req,res)=>{
    let info={
        Amount:req.body.Amount,
        Description:req.body.Description,
        Category:req.body.Category 
    }
    try{
       
        let id=req.params.id
        const userExpense=await expenseModel.update(info,{where:{id:id}})
        res.status(200).json(userExpense)
    }
    catch(err){
        console.log(err)
    }
}

module.exports={addExpense,getAllExpenses,getOneExpenxse,deleteExpence,editExpence}