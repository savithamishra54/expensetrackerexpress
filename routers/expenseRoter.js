const expensecontroller=require('../controllers/expensecontroller.js')


const router=require('express').Router()

router.post('/expense',expensecontroller.addExpense)
router.get('/expense', expensecontroller.getAllExpenses)

router.get('/expense/:id', expensecontroller.getOneExpenxse)
router.delete('/expense/:id',expensecontroller.deleteExpence)
router.put('/expense/:id',expensecontroller.editExpence)

module.exports=router