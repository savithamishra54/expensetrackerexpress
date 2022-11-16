const express=require('express')
const body=require('body-parser')
const cors=require('cors')
const app=express()
const model=require('./models/expenseModels')

app.use(body.json())
 app.use(cors())
 
app.use(express.json())
const router=require('./routers/expenseRoter.js')
app.use(router)


model.sync().then((res)=>{
    console.log(res)
})


app.listen(3000)