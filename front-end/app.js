
let form=document.getElementById('formId')
let ul=document.getElementById('ulId')

form.addEventListener('submit',addExpense)
ul.addEventListener('click',editDelete)

let [obj,id,editId,deleteId,displayAll]=[{},0,0,0,false]
function displayExpenses(id,amount,description,category){
    ul.innerHTML+=`<li class='liClass'>
    <input type='hidden' id='hiddenId' value='${id}'>
   <span>${amount} - ${description} -${category}</span>
   <button>delete</button><button>edit</button>
    </li>`
}
async function Axios(){
    try{
        if(editId!=0) await axios.put(`http://localhost:3000/expense/${editId}`,obj)
            
        else if(deleteId!=0) await axios.delete(`http://localhost:3000/expense/${deleteId}`)

        else if(displayAll){
            let expenses= await axios.get("http://localhost:3000/expense")
              for(var i=0;i<expenses.data.length;i++){
                   let e=expenses.data[i]
                   displayExpenses(e.id,e.Amount,e.Description,e.Category)
              } 
              displayAll=false
        }
        else {
            let expense=await axios.post('http://localhost:3000/expense',obj)
            id=expense.data.id
        }
    }

    catch(err){
        console.log(err)
    }
}

function addExpense(e){
e.preventDefault();
let amount=document.getElementById('amount').value
let description=document.getElementById('description').value
let category=document.getElementById('select').value
 obj={
    Amount:amount,
    Description:description,
    Category:category
}
 Axios()
 editId=0
displayExpenses(id,amount,description,category)
}

window.addEventListener("DOMContentLoaded",()=>{
    displayAll=true
    Axios()       
})

function editDelete(e){
    e.preventDefault();
    var li = e.target.parentElement;
    let id=li.children[0].value
if(e.target.textContent=='delete'){
    if(confirm('Are You Sure?')){
   ul.removeChild(li)
   deleteId=id
   Axios()
   deleteId=0
  }
}
else if(e.target.textContent=='edit'){
    let text=li.children[1].textContent.split('-')
    document.getElementById('amount').value=parseInt(text[0])
    document.getElementById('description').value=text[1]
    document.getElementById('select').value=text[2]
    editId=id  
    ul.removeChild(li)
 }
}

