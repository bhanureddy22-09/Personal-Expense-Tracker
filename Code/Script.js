document.getElementById('expense-form').addEventListener('submit', addExpense); 
function addExpense(event) { 
event.preventDefault(); 
const description = document.getElementById('description').value; 
7 
const category = document.getElementById('category').value; 
const amount = document.getElementById('amount').value; 
if (!description || !amount) { 
alert('Please fill in all fields'); 
return; 
} 
const tableBody = document.querySelector('#expense-table tbody'); 
const row = document.createElement('tr'); 
row.innerHTML = ` 
<td>${description}</td> 
<td>${category}</td> 
<td>${amount}</td> 
<td> 
<button class="delete-btn">Delete</button> 
</td> 
`; 
tableBody.appendChild(row); 
document.getElementById('description').value = ''; 
document.getElementById('amount').value = ''; 
row.querySelector('.delete-btn').addEventListener('click', () => { 
row.remove(); 
}); 
}