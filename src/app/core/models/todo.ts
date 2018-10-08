export interface Todo {
  id?: number;
  name: string;
  isComplete: boolean;
  timeCreated?: string;
}

export const mockTodoList: Todo[] = [
  {
    id: 1,
    name: 'Pickup groceries',
    isComplete: false,
    timeCreated: '2017-04-19T07:58:31.0389719-07:00',
  },
  {
    id: 2,
    name: 'Do laundry',
    isComplete: false,
    timeCreated: '2018-10-07T16:58:31.0389719-07:00',
  },
  {
    id: 3,
    name: 'Return library books',
    isComplete: true,
    timeCreated: '2018-10-07T16:58:31.0389719-07:00',
  },
  {
    id: 4,
    name: 'Wash car',
    isComplete: false,
    timeCreated: '2018-10-07T16:58:31.0389719-07:00',
  },
  {
    id: 5,
    name: 'Finish VDF app and talk',
    isComplete: true,
    timeCreated: '2018-10-19T21:23:59.0389719-07:00',
  },
];