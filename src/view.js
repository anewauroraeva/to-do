const render = (watchedState, form) => {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  watchedState.addedTasks.forEach((task) => {
    const { name, priority, id } = task;

    const taskContainer = document.createElement('tr');
    taskContainer.classList.add('fw-formal');
    taskContainer.id = id;
    tableBody.prepend(taskContainer);

    const taskName = document.createElement('td');
    taskName.classList.add('align-middle');
    taskName.textContent = name;
    taskContainer.append(taskName);

    const taskPriority = document.createElement('td');
    taskPriority.classList.add('align-middle');
    const priorityText = document.createElement('h6');
    priorityText.classList.add('mb-0');
    const priorityBadge = document.createElement('span');
    priorityBadge.classList.add('badge');
    priorityBadge.textContent = priority;

    taskPriority.append(priorityText);
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
    taskContainer.append(taskPriority);

    const doneRemoveContainer = document.createElement('td');
    doneRemoveContainer.classList.add('align-middle');
    const done = document.createElement('a');
    done.setAttribute('href', '#!');
    done.setAttribute('title', 'Done');
    done.dataset.mdbToggle = 'tooltip';
    done.classList.add('fas', 'fa-check', 'fa-lg', 'text-success', 'me-3');
    done.textContent = 'D';

    const remove = document.createElement('a');
    remove.setAttribute('href', '#!');
    done.setAttribute('title', 'Remove');
    remove.dataset.mdbToggle = 'tooltip';
    remove.classList.add('fas', 'fa-trash-alt', 'fa-lg', 'text-warning');
    remove.textContent = 'X';

    doneRemoveContainer.append(done, remove);
    taskContainer.append(doneRemoveContainer);

    form.reset();
    form.focus();
  });
};

export default render;
