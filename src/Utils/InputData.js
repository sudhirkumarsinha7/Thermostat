export const DataFormat = {
  login: {
    userName: {
      displayName: 'User Name',
      stateName: 'username',
      type: 'string',
      required: true,
      keyboardType: 'default',
      maxLength: 32,
    },
    password: {
      displayName: 'Password',
      stateName: 'password',
      type: 'string',
      required: true,
      keyboardType: 'default',
      maxLength: 32,
    },
    submit: {
      type: 'button',
      leftButton: {
        displayName: 'Login',
        buttonStyles: {
          block: true,
          light: true,
        },
      },
    },
  },
};
