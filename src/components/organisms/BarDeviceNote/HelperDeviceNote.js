const createText = {
  title: 'Create New Device',
  buttonName: 'Add Device',
};

const editText = {
  title: 'Edit Device',
  buttonName: 'Edit',
};

export const barText = (stateBar) => {
  if (stateBar) {
    return editText;
  }
  return createText;
};

export const editeState = (deviceId) => {
  if (deviceId) {
    return true;
  }
  return false;
};
