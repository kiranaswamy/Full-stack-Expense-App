function Timetracker() {
  const amount = document.getElementById("expense-amount").value;
  const description = document.getElementById("expense-description").value;
  const category = document.getElementById("expense-category").value;

  if (!amount || !description) {
    alert("Please enter both amount and description!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${description} - ${amount} -${category} `;


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.width = '150px';
  deleteBtn.onclick = () => li.remove();


  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.width = '150px';
  editBtn.style.marginRight = '10px';
  editBtn.onclick = () => {
    document.getElementById("expense-amount").value = amount;
    document.getElementById("expense-description").value = description;
    document.getElementById("expense-category").value = category;
    li.remove();
  };


  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  let ul = document.getElementById("expense-list");
  ul.appendChild(li);


  document.getElementById("expense-amount").value = "";
  document.getElementById("expense-description").value = "";
  document.getElementById("expense-category").value = "Fuel";
}
module.exports = Timetracker;