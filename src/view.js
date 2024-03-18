// import _ from 'lodash';

// tbody
const tableBody = document.querySelector('tbody');

const createTaskContainer = (name) => {
  const taskContainer = document.createElement('tr');
  taskContainer.classList.add('fw-formal');

  const taskName = document.createElement('td'); // +
  taskName.classList.add('align-middle');
  taskName.textContent = name;
};

const createPriority = (priority) => { // works
  const taskPriority = document.createElement('td');
  taskPriority.classList.add('align-middle');
  const priorityText = document.createElement('h6');
  priorityText.classList.add('mb-0');
  const priorityBadge = document.createElement('span');
  priorityBadge.classList.add('badge');
  priorityBadge.textContent = priority;

  taskPriority.append(priorityText);
  priorityText.append(priorityBadge);
  // console.log(taskPriorityCont);

  switch (priority) {
    case 'Low priority':
      priorityBadge.classList.add('bg-success');
      break;
    case 'Medium priority':
      priorityBadge.classList.add('bg-warning');
      break;
    case 'High priority':
      priorityBadge.classList.add('bg-danger');
      break;
    default:
      break;
  }
};
// console.log(createPriorityContainer('Low priority'));

const createDoneRemove = () => {
  const doneRemoveContainer = document.createElement('td');
  doneRemoveContainer.classList.add('align-middle');
  const done = document.createElement('a');
  done.setAttribute('href', '#!');
  done.setAttribute('title', 'Done');
  done.dataset.mdbToggle = 'tooltip';
  done.classList.add('fas', 'fa-check', 'fa-lg', 'text-success', 'me-3');

  const remove = document.createElement('a');
  remove.setAttribute('href', '#!');
  done.setAttribute('title', 'Remove');
  remove.dataset.mdbToggle = 'tooltip';
  remove.classList.add('fas', 'fa-trash-alt', 'fa-lg', 'text-warning');

  doneRemoveContainer.append(done, remove);
};

/* const render = (watchedState) => {
}; */

// export default render;
