const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// Form Submit EVENT

form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
}
