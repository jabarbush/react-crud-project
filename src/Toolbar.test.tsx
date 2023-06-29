import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInfo from './components/UserInfo';
import User from './interfaces/User';
import Toolbar from './components/Toolbar';
import App from './App';

beforeEach(() => jest.resetAllMocks())
describe('UserInfo component', () => {
    const userList: User[] = [{
        "id": 4,
        "name": "jake",
        "dob": "03/03/2003",
        "phone": "4564564564",
        "email": "jake4@gmail.com",
        "signature": null
      },
      {
        "id": 5,
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
        "id": 6,
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
    test('opens the AddUser popup when "Add New User" button is clicked', () => {
        render(<Toolbar userList={[]} setUserList={jest.fn()} />);
        const addButton = screen.getByText('Add New User');
        fireEvent.click(addButton);
    });
});