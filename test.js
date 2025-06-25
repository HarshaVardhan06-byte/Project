function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement('li');
  li.textContent = task;

  li.onclick = () => {
    li.classList.toggle('completed');
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);

  document.getElementById('todo-list').appendChild(li);
  input.value = '';
}
