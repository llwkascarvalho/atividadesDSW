document.getElementById("itemInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem();
    }
  });
  
  function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemValue = itemInput.value.trim();
  
    if (itemValue === "") {
      alert("Por favor, digite um item.");
      return;
    }
  
    const shoppingList = document.getElementById("shoppingList");
    const newItem = document.createElement("li");
    newItem.textContent = itemValue;
  
    shoppingList.appendChild(newItem);
    itemInput.value = "";
  }
  