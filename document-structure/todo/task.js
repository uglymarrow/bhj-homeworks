let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let addButton = document.getElementById('tasks__add');

document.onkeydown = event => {
    if (event.key == "Enter") {
      if (taskInput.value != '')
        addTask();
      return false;
    };
    return true;
};

addButton.addEventListener('click', event => {
  if (taskInput.value != '')
    addTask();
  event.preventDefault();
});

function addTask() {
  tasksList.insertAdjacentHTML('afterbegin',
            `<div class="task">
              <div class="task__title">
                ${taskInput.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>`);

  let taskRemover = tasksList.firstElementChild.querySelector('.task__remove'); 
  taskRemover.addEventListener('click', (event) => {
            event.currentTarget.parentElement.remove();
        });  
  taskInput.value = ''; 
}