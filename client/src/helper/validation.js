const usernameRules = {
  required: { value: true, message: 'Username is required' },
  minLength: { value: 5, message: 'Username must be at least 5 characters' },
  maxLength: { value: 20, message: 'Username must not exceed 20 characters' },
};

const passwordRules = {
  required: { value: true, message: 'Password is required' },
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters long',
  },
  maxLength: {
    value: 20,
    message: 'Password must be at most 20 characters long',
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/,
    message:
      'Password must contain one uppercase letter, one lowercase letter, one number, and one special character',
  },
};

export { usernameRules, passwordRules };
