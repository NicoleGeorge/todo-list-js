const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form Submit items with a 'submit; EVENT
form.addEventListener('submit', addItem);
// Delete items with a 'click' EVENT
itemList.addEventListener('click', deleteItem);
// Filter with a 'keyup' EVENT
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  //  get input value
  const newItem = document.getElementById('item').value;

  //   Create new <li> element to capture a new list input
  const newListItem = document.createElement('li');
  // add class to the new element
  newListItem.className = 'list-group-item';
  // console.log(newListItem);

  //   Add new list item value to the list
  newListItem.appendChild(document.createTextNode(newItem));

  //   create the delete button element
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-small float-right delete';

  //   Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //   Add the button to the li element
  newListItem.appendChild(deleteBtn);
  itemList.appendChild(newListItem);
}

// DELETE item function

function deleteItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you have completed this task...')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items function
function filterItems(e) {
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  //   get all li elements
  const items = itemList.getElementsByTagName('li');
  // convert the li collection into an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    // compare item name with search box text
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
