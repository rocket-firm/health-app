export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.project
      ];

    case 'ADD_PROJECTS':
      return [
        ...action.projects
      ];

    case 'DELETE_PROJECT':
      return state.filter((project) => project.id !== action.id);

    case 'CONFIRM_DELETE_PROJECT':
      return state.map((project) => {
        if (project === action.id) {
          project.deleteConfirm = true;
        }

        return project;
      });

    default:
      return state;
  }
};
