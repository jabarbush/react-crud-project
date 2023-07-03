import { render, screen, fireEvent } from '@testing-library/react';
import User from './interfaces/User';
import DeleteUser from './components/DeleteUser';

beforeEach(() => jest.resetAllMocks())
describe('DeleteUser component', () => {
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
        "name": "jake425525333",
        "dob": "03/03/2003",
        "phone": "4564564564",
        "email": "jake4@gmail.com",
        "signature": null
      },
      {
        "id": 3,
        "name": "ashley1234",
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

    const onCloseUserInfo = jest.fn();
    const setUserList = jest.fn();
    const handleOpenDeleteUser = jest.fn();

    test('Delete component renders', () => {
        render(
            <DeleteUser
                userList={userList}
                selectedUser={selectedUser}
                setUserList={setUserList}
                onClose={onCloseUserInfo}
                onDeleteUser={handleOpenDeleteUser}
            />
        );
        const deleteDialogElement = screen.getByText('Confirm Delete');
        expect(deleteDialogElement).toBeInTheDocument();
    });

    //i know, not ideal
    test('Clicking OK removes selected user from the user list', () => {
        render(
          <DeleteUser
            userList={userList}
            selectedUser={selectedUser}
            setUserList={setUserList}
            onClose={onCloseUserInfo}
            onDeleteUser={handleOpenDeleteUser}
          />
        );
      
        const okButton = screen.getByText('OK');
        fireEvent.click(okButton);
        const updatedUserList = userList.filter(user => user.id !== selectedUser.id);
        render(
          <DeleteUser
            userList={updatedUserList}
            selectedUser={null}
            setUserList={setUserList}
            onClose={onCloseUserInfo}
            onDeleteUser={handleOpenDeleteUser}
          />
        );
      
        const deletedUser = screen.queryByText(selectedUser.name);
        expect(deletedUser).not.toBeInTheDocument();
      });
      

      test('DeleteUser component matches snapshot', () => {
        
        const onClose = jest.fn();
        const onDeleteUser = jest.fn();
        const setUserList = jest.fn();
      
        const { asFragment } = render(
          <DeleteUser
            userList={userList}
            selectedUser={selectedUser}
            onClose={onClose}
            onDeleteUser={onDeleteUser}
            setUserList={setUserList}
          />
        );
      
        expect(asFragment()).toMatchSnapshot();
      });
});