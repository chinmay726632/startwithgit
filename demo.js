const arr1 = [1, 2, 3]

const arr2 = [3,5,6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)
//
function saveToLocalStorage(event){
    event.preventDefault();
    const ExpenseAmount=event.target.amount.value;
    const Description=event.target.descriptionOfExpense.value;
    const Category=event.target.categoryofExpense.value;
    
    
    const obj={
       ExpenseAmount,
       Description,
       Category
    }
    localStorage.setItem('ExpenseTracker', JSON.stringify(obj));
    showUserOnScreen(obj)
  
}
function showUserOnScreen(obj){
    const parentEle=document.getElementById('listOfItems')
    const childEle=document.createElement('li')
    childEle.textContent=obj.ExpenseAmount+'-'+obj.Description+'-'+obj.Category
    parentEle.appendChild(childEle)


 const deleteButton=document.createElement('input') 
 deleteButton.type="button"
 deleteButton.value="delete Expense"
 deleteButton.onclick=()=>{
   
    document.getElementById('ExpenseAmountInputTag').value=obj.ExpenseAmount
    document.getElementById('DescriptionInputTag').value=obj.Description
    document.getElementById('CategoryInputTag').value=obj.Category
 }
 childEle.appendChild(deleteButton)
 parentEle.appendChild(childEle)
 
 const editButton=document.createElement('input') 
 editButton.type="button"
 editButton.value="edit Expense"
editButton.onclick=()=>{
  
   
    document.getElementById('ExpenseAmountInputTag').value=obj.ExpenseAmount
    document.getElementById('DescriptionInputTag').value=obj.Description
    document.getElementById('CategoryInputTag').value=obj.Category
 }
 childEle.appendChild(deleteButton)
 childEle.appendChild(editButton)
 parentEle.appendChild(childEle)
 
}