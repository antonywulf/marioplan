const initState = {
  projects: [
    { id: '1', title: 'pidushf[oJFOEHFhewlk  wefp uweguifweo' },
    { id: '2', title: 'p[wo  wehf  jie0f w[peojie e' },
    { id: '3', title: 'lol kwoijhf [wp' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
