import { render, screen } from '@testing-library/react';
import User from './interfaces/User';
import EditUserInfo from './components/EditUserInfo';

beforeEach(() => jest.resetAllMocks())
describe('EditUserInfo component', () => {
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

    const setUserList = jest.fn();
    const onCloseEditUserInfo = jest.fn();

    test('EditUserInfo component renders', () => {
        render(
            <EditUserInfo
                selectedUser={selectedUser}
                setUserList={setUserList}
                onCloseEditUserInfo={onCloseEditUserInfo}
            />
        );
        const editTitle = screen.getByText('Edit User Information');
        expect(editTitle).toBeInTheDocument();
    });

    test('EditUserInfo component matches snapshot', () => {
      
        const { asFragment } = render(
            <EditUserInfo
            selectedUser={selectedUser}
            setUserList={setUserList}
            onCloseEditUserInfo={onCloseEditUserInfo}
        />
        );
      
        expect(asFragment()).toMatchSnapshot();
      });
});