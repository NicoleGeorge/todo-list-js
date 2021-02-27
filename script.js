const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// Form Submit EVENT

form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
  e.preventDefault();

  //  get input value
  const newItem = document.getElementById('item');

  //   Create new <li> element to capture a new list input
  const newListItem = document.createElement('li');
  // add class to the new element
  newListItem.className = 'list-group-items';

  console.log(newListItem);
}
