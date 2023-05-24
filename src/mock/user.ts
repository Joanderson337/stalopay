export interface User {
  email: string;
  name: string;
  photoUrl: string;
  password: string;
  token: {
    value: string;
    isValid: boolean;
  };
}

export const UserMock: User[] = [
  {
    name: 'Joanderson Silva',
    email: 'joanderson@stalo.com',
    photoUrl: 'https://github.com/Joanderson337.png',
    password: '123456',
    token: {
      value: '5055055',
      isValid: true,
    },
  },
  {
    name: 'Fulaninho da Silva',
    email: 'leo@stalo.com',
    photoUrl: 'https://github.com/Joanderson337.png',
    password: '123456',
    token: {
      value: '5050045',
      isValid: true,
    },
  },
];
