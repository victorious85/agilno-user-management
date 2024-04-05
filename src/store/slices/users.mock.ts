import { v4 as uuidv4 } from 'uuid';
import { UsersInitialState } from './users.slices.ts';

export const mockUsers: UsersInitialState = {
  users: [
    {
      id: uuidv4(),
      name: 'Viktor Kurochka',
      email: 'v.p.kurochka@gmail.com',
      role: 'Software engineer',
    },
    {
      id: uuidv4(),
      name: 'Yukon Oki',
      email: 'yukon@gmail.com',
      role: 'Product manager',
    },
    {
      id: uuidv4(),
      name: 'Solomia Gecko',
      email: 'solomia@gmail.com',
      role: 'Quality engineer',
    },
    {
      id: uuidv4(),
      name: 'Brendon Lee',
      email: 'brendon@gmail.com',
      role: 'Designer',
    },
    {
      id: uuidv4(),
      name: 'Petro Gluscko',
      email: 'petro@gmail.com',
      role: 'Designer',
    },
    {
      id: uuidv4(),
      name: 'Leonid Shevchenko',
      email: 'leonid@gmail.com',
      role: 'Business analyst',
    },
    {
      id: uuidv4(),
      name: 'Oleh Dovbyk',
      email: 'brendon@gmail.com',
      role: 'Quality automation engineer',
    },
    {
      id: uuidv4(),
      name: 'Brendon Lee',
      email: 'brendon@gmail.com',
      role: 'Scrum master',
    },
  ],
};
