import onChange from 'on-change';

// import render from './view.js';
// import i18n from 'i18next';
// import _ from 'lodash';
// import ru from './locales/index.js';

const app = () => {
  const state = {
    form: {
      isValid: false,
      formState: 'idle',
    },
    addedTasks: [], // { name: 'task', priority: 'medium' }
  };

  const watchedState = onChange(state, () => {
    console.log('w state');
  });

  const submit = document.querySelector('button');
  console.log(submit);

  submit.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const done = document.querySelector('[title="Done"]');
  console.log(done);
  const remove = document.querySelector('[title="Remove"]');
  console.log(remove);

  // events: submit on add, click on done & remove
};

export default app;
