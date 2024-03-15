// import _ from 'lodash';

// tbody
const tableBody = document.querySelector('tbody');

const createTaskPriorityCont = (priority) => {
  const taskPriorityCont = document.createElement('td');
  taskPriorityCont.classList.add('align-middle');
  taskPriorityCont.textContent = priority;
  const priorityText = document.createElement('h6');
  priorityText.classList.add('mb-0');
  const priorityBadge = document.createElement('span');
  priorityBadge.classList.add('badge');

  taskPriorityCont.append(priorityText);
  priorityText.append(priorityBadge);

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

const createDoneRemoveContainer = () => {
  const doneRemoveContainer = document.createElement('td');
  doneRemoveContainer.classList.add('align-middle');
  const done = document.createElement('a');
  done.setAttribute('href', '#!');
  done.setAttribute('title', 'Done');
  done.dataset.mdbToggle = 'tooltip';
  done.classList.add('fas', 'fa-check', 'fa-lg', 'text-success', 'me-3');

  const remove = document.createElement('a');
  remove.setAttribute('href', '#!');
  remove.dataset.mdbToggle = 'tooltip';
  remove.classList.add('fas', 'fa-trash-alt', 'fa-lg', 'text-warning');

  doneRemoveContainer.append(done, remove);
};
// tr
const createTaskContainer = (name, priority) => {
  const taskContainer = document.createElement('tr');

  const taskName = document.createElement('td'); // +
  taskName.classList.add('align-middle');
  taskName.textContent = name;
};
