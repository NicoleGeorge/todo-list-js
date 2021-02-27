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
  newListItem.className = 'list-group-item';
  // console.log(newListItem);

  //   Add new list item value to the list
  newListItem.appendChild(document.createTextNode(newItem.value));

  itemList.appendChild(newListItem);
  
}
