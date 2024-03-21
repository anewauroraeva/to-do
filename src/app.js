import onChange from 'on-change';
import { uniqueId } from 'lodash'; // or just uniqueId?
// import { string } from 'yup';
import render from './view.js';

// import i18n from 'i18next';
// import ru from './locales/index.js';

/* const validate = (str) => {
  const schema = string()
    .trim()
    .max(30)
    .validateSync(str);
  return schema;
}; */

const normalizeTask = (name, priority) => {
  const id = Number(uniqueId());
  return {
    name,
    priority,
    id,
    visible: true,
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
    // activeTasks: [],
  };

  const watchedState = onChange(state, () => {
    render(watchedState, form);
  });

  const { addedTasks } = watchedState;
  console.log(addedTasks);
  const activeTasks = addedTasks.filter((task) => task.visible);
  console.log(activeTasks);

  const done = document.querySelector('[title="Done"]');
  console.log(done);
  const remove = document.querySelector('[title="Remove"]');
  console.log(remove);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // validate(input.value);
    const normTask = normalizeTask(input.value, select.value);
    watchedState.addedTasks.push(normTask);
    console.log(watchedState.addedTasks);
  });

  console.log('after submit');

  /* [done, remove].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target);
    });
  }); */

  const test = document.querySelector('.m-4');
  test.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
  });
  console.log('after click');
};

export default app;
