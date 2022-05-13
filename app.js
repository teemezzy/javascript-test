const list = document.querySelector('#book-list ul')
const forms = document.forms;

list.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})

//ADD TO THE DOM 
const addForm = forms['add-book'];
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //CREATE ELEMENTS IN THE DOM
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // Add content in the DOM
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // Add classes
  deleteBtn.classList.add('delete')
  bookName.classList.add('name')

  // Append To document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
})

