import onChange from 'on-change';
import { uniqueId } from 'lodash'; // or just uniqueId?
import render from './view.js';

// import i18n from 'i18next';
// import ru from './locales/index.js';

const normalizeTask = (name, priority) => {
  const id = Number(uniqueId());
  return {
    name,
    priority,
    id,
    // visible: true,
  };
};

const form = document.querySelector('form');
const input = document.querySelector('.form-control');
const select = document.querySelector('select');

const app = () => {
  const state = {
    form: {
      isValid: false,
      formState: 'idle',
    },
    addedTasks: [], // { name: 'task', priority: 'Medium priority', isDoneOrRemoved: true/false }
  };

  const watchedState = onChange(state, () => {
    render(watchedState, form);
  });

  /* const submit = document.querySelector('button');
  // console.log(submit);

  submit.addEventListener('submit', (e) => {
    // e.preventDefault();
    console.log('target', e.target);
  }); */

  /* const submit = document.querySelector('.btn');
  console.log(submit); */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input.value);
    // console.log(select.value);
    const normTask = normalizeTask(input.value, select.value);
    // console.log(normTask);
    watchedState.addedTasks.push(normTask);
    console.log(watchedState.addedTasks);
  });

  // const { addedTasks } = watchedState;
  // const activeTasks = addedTasks.filter((task) => task.visible);

  // const done = document.querySelector('[title="Done"]');
  // console.log(done);
  // const remove = document.querySelector('[title="Remove"]');
  // console.log(remove);

  // events: submit on add, click on done & remove
};

export default app;
