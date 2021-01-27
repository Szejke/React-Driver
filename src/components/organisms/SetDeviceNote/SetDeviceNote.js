const createText = {
  title: 'Create New Device',
};

export const editStae = ({ deviceId }) => {
  if (deviceId && deviceId.id.length) {
    const etitText = {
      title: `Edit Device ${deviceId.id}`,
    };
    return etitText;
  }
  return createText;
};
