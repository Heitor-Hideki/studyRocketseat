const inputTask = document.getElementById('task');
const containerList = document.getElementById('list');

const ul = document.createElement('ul');

const list = [];

containerList.appendChild(ul);

add = function() {
  const value = inputTask.value;
  
  list.push(value);

  const li = document.createElement('li');
  
  li.appendChild(document.createTextNode(value))

  const buttonEdit = document.createElement('button');
  buttonEdit.innerHTML = 'Editar';
  buttonEdit.setAttribute('id', `${list.length}`);
  buttonEdit.addEventListener('click', (event) => edit(event));
  li.appendChild(buttonEdit);

  const buttonDelete = document.createElement('button');
  buttonDelete.innerHTML = 'Deletar';
  buttonDelete.setAttribute('id', `${list.length}`);
  buttonDelete.addEventListener('click', (event) => remove(event));
  li.appendChild(buttonDelete);

  ul.appendChild(li);
}

edit = function(event) {
  console.log(event.target.id);
}

remove = function(event) {
  console.log(event.target.id);
}