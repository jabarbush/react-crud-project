import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInfo from './components/UserInfo';
import User from './interfaces/User';

beforeEach(() => jest.resetAllMocks())
describe('UserInfo component', () => {
  const userList: User[] = [];
  const selectedUser = {
    id: 4,
    name: 'jake',
    dob: '03/03/2003',
    phone: '4564564564',
    email: 'jake4@gmail.com',
    signature: {
      pin: '123123',
      fontStyle: 'Mr Dafoe',
    },
  };
  const selectedUser_null_signature = {
    id: 4,
    name: 'jake',
    dob: '03/03/2003',
    phone: '4564564564',
    email: 'jake4@gmail.com',
    signature: null,
  };
  const onCloseUserInfo = jest.fn();
  const setUserList = jest.fn();

  test('renders user information correctly', () => {
    render(
      <UserInfo
        userList={userList}
        selectedUser={selectedUser}
        onCloseUserInfo={onCloseUserInfo}
        setUserList={setUserList}
      />
    );

    const userNameElement = screen.getByText(selectedUser.name);
    const dobElement = screen.getByText(`${selectedUser.dob}`);
    const phoneElement = screen.getByText(`${selectedUser.phone}`);
    const emailElement = screen.getByText(`${selectedUser.email}`);
    const trashIconElement = screen.getByTestId('delete-user-icon');
    const editIconElement = screen.getByTestId('edit-user-icon');

    expect(userNameElement).toBeInTheDocument();
    expect(dobElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(trashIconElement).toBeInTheDocument();
    expect(editIconElement).toBeInTheDocument();
    expect(screen.getByTestId('userInfo-component')).toMatchSnapshot();
  });

  test('opens delete user dialog on trash icon click', () => {
    render(
      <UserInfo
        userList={userList}
        selectedUser={selectedUser}
        onCloseUserInfo={onCloseUserInfo}
        setUserList={setUserList}
      />
    );

    const trashIconElement = screen.getByTestId('delete-user-icon');
    fireEvent.click(trashIconElement);

    const deleteDialogElement = screen.getByText('Confirm Delete');
    expect(deleteDialogElement).toBeInTheDocument();
  });

  test('opens edit user info form on edit icon click', () => {
    render(
      <UserInfo
        userList={userList}
        selectedUser={selectedUser}
        onCloseUserInfo={onCloseUserInfo}
        setUserList={setUserList}
      />
    );

    const editIconElement = screen.getByTestId('edit-user-icon');
    fireEvent.click(editIconElement);

    const editFormElement = screen.getByText('Edit User Information');
    expect(editFormElement).toBeInTheDocument();
  });

  test('adds a signature if one is not present', () => {
    render(
      <UserInfo
        userList={userList}
        selectedUser={selectedUser_null_signature}
        onCloseUserInfo={onCloseUserInfo}
        setUserList={setUserList}
      />
    );

    const addSignatureButton = screen.getByText('Add Signature');
    fireEvent.click(addSignatureButton);

    
    expect(selectedUser_null_signature).not.toBeNull;
  });
});
