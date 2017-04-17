import * as HealthAPI from './../api/HealthAPI';

export const addProject = (project) => {
  return {
    type: 'ADD_PROJECT',
    project
  }
};

export const addProjects = (projects) => {
  return {
    type: 'ADD_PROJECTS',
    projects
  }
};

export const deleteProject = (id) => {
  return {
    type: 'DELETE_PROJECT',
    id
  }
};

export const confirmDeleteProject = (id) => {
  return {
    type: 'CONFIRM_DELETE_PROJECT',
    id
  }
};

export const cancelDeleteProject = (id) => {
  return {
    type: 'CANCEL_DELETE_PROJECT',
    id
  }
}

export const editProject = (id) => {
  return {
    type: 'EDIT_PROJECT',
    id
  }
}

export const cancelEditProject = (id) => {
  return {
    type: 'CANCEL_EDIT_PROJECT',
    id
  }
}

export const startAddProject = (project) => {
  return (dispatch, getState) => {
    return HealthAPI.addProject(project).then((response) => {
      if (response.data.success === true) {
        dispatch(addProject(response.data.project));
      } else {
        console.log('Error adding project', response.data);
      }
    });
  };
};

export const startAddProjects = () => {
  return (dispatch, getState) => {
    return HealthAPI.getProjects().then((response) => {
      console.log('Got some projects', response.data);
      dispatch(addProjects(response.data));
    });
  };
};

export const startDeleteProject = (id) => {
  return (dispatch, getState) => {
    return HealthAPI.deleteProject(id).then((response) => {
      dispatch(deleteProject(id));
    });
  }
};
