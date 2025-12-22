let expenses = [];
//get html elements
const nameIput = document.getElementById("expenseName");
const amountIpnut= document.getElementById("expenseAmount");
const expenselist = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalamount");

document.getElementById("AddBtn").addEventListener("click", addExpense);
document.getElementById("ClearBtn").addEventListener("click", clearsExpenses);

function addExpense(){
    let name= nameIput.value;
    let amount = Number(amountIpnut.value);
    if (name==="" || amount<= 0) return;
    expenses.push({ name, amount });
    nameIput.value="";
    amountIpnut.value = "";
    renderExpenses();
    console.log(expenses)
}

console.log("expense array: ")
function renderExpenses(){
    expenselist.innerHTML="";
    expenses.forEach((expense, index) => {
        console.log("expenses");
          const li = document.createElement("li");
          
          if (expense.amount >10000){
          li.classList.add("high");
    } 
    const textNode= document.createTextNode(
     `${expense.name} - ${expense.amount}`
    )
     let deletBtn = document.createElement("span");
     deletBtn.innerText= "X";
     deletBtn.classList.add("delete");

     deletBtn.addEventListener("click", () =>{
        deleteExpense(index);
     });
     li.appendChild(textNode);
     li.appendChild(deletBtn);
    expenselist.appendChild(li);
});
    updateTotal();
}

function deleteExpense(index){
expenses.splice(index, 1);
renderExpenses();
}

function clearsExpenses(){
    expenses = [];
    renderExpenses();
}

function updateTotal(){
    let total = expenses.reduce((sum, exp) => sum+ exp.amount, 0);
    totalAmount.textContent= total;
}