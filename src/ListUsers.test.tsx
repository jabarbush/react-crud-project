import { render, screen } from '@testing-library/react';
import User from './interfaces/User';
import ListUsers from './components/ListUsers';
import { SetStateAction } from 'react';

beforeEach(() => jest.resetAllMocks())
describe('ListUsers component', () => {
    const selectedUser = {
        id: 1,
        name: 'jake',
        dob: '03/03/2003',
        phone: '4564564564',
        email: 'jake4@gmail.com',
        signature: {
          pin: '123123',
          fontStyle: 'Mr Dafoe',
        },
      };
    const userList: User[] = [{
        id: 1,
        name: 'jake',
        dob: '03/03/2003',
        phone: '4564564564',
        email: 'jake4@gmail.com',
        signature: {
            pin: '123123',
            fontStyle: 'Mr Dafoe',
        },
    },
    {
        "id": 2,
        "name": "jack425525333",
        "dob": "03/03/2003",
        "phone": "4564564564",
        "email": "jake4@gmail.com",
        "signature": null
      },
      {
        "id": 3,
        "name": "ashley",
        "dob": "05/05/1995",
        "phone": "0980980988",
        "email": "ashley@jake.com",
        "signature": {
          "pin": "123123",
          "fontStyle": "Dancing Script"
        }
      },
      {
        "id": 4,
        "name": "123",
        "dob": "01/01/2001",
        "phone": "1231231231",
        "email": "jake@gmail.com",
        "signature": {
          "pin": "123123",
          "fontStyle": "Great Vibes"
        }
      }];

    const setUserList = jest.fn();
    const onUserClick = jest.fn();

    test('ListUsers component renders', () => {
        render(
            <ListUsers
                selectedUser={selectedUser}
                userList={userList}
                onUserClick={onUserClick} setUserList={function (value: SetStateAction<User[]>): void {
                    throw new Error('Function not implemented.');
                } }            />
        );
        const list = screen.getByTestId('list-component');
        expect(list).toBeInTheDocument();
    });

    test('ListUsers component renders each user in list', () => {
        render(
            <ListUsers
                selectedUser={selectedUser}
                userList={userList}
                onUserClick={onUserClick} setUserList={function (value: SetStateAction<User[]>): void {
                    throw new Error('Function not implemented.');
                } }            />
        );
        const user1 = screen.getByText('jake');
        const user2 = screen.getByText('jack425525333');
        const user3 = screen.getByText('ashley');
        const user4 = screen.getByText('123');

        expect(user1).toBeInTheDocument();
        expect(user2).toBeInTheDocument();
        expect(user3).toBeInTheDocument();
        expect(user4).toBeInTheDocument();
    });

    test('ListUsers component matches snapshot', () => {
      
        const { asFragment } = render(
            <ListUsers
                selectedUser={selectedUser}
                setUserList={setUserList}
                onUserClick={onUserClick} userList={[]}
            />
        );
      
        expect(asFragment()).toMatchSnapshot();
      });
});