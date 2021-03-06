export const SIGN_IN_URL = 'https://api-employee-testing.herokuapp.com/auth/v1/sign-in';
export const USERS_LIST_URL = (page, pageSize) =>
  `https://api-employee-testing.herokuapp.com/api/v1/users/?page=${page}&pageSize=${pageSize}`;
export const CREATE_USER_URL = 'https://api-employee-testing.herokuapp.com/api/v1/users';
export const DELETE_USER_URL = userId => `https://api-employee-testing.herokuapp.com/api/v1/users/${userId}`;
