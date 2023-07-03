import { render, screen, fireEvent } from '@testing-library/react';
import User from './interfaces/User';
import Toolbar from './components/Toolbar';
import App from './App';

beforeEach(() => jest.resetAllMocks());

describe('Toolbar component', () => {
  const userList: User[] = [
    {
      id: 4,
      name: 'jake',
      dob: '03/03/2003',
      phone: '4564564564',
      email: 'jake4@gmail.com',
      signature: null,
    },
    {
      id: 5,
      name: 'ashley',
      dob: '05/05/1995',
      phone: '0980980988',
      email: 'ashley@jake.com',
      signature: {
        pin: '123123',
        fontStyle: 'Dancing Script',
      },
    },
    {
      id: 6,
      name: '123',
      dob: '01/01/2001',
      phone: '1231231231',
      email: 'jake@gmail.com',
      signature: {
        pin: '123123',
        fontStyle: 'Great Vibes',
      },
    },
  ];

  const setUserList = jest.fn();

  test('opens the AddUser popup when "Add New User" button is clicked', () => {
    render(<Toolbar userList={userList} setUserList={setUserList} />);
    const addButton = screen.getByText('Add New User');
    fireEvent.click(addButton);
    const addUserDialogElement = screen.getByText('Cancel');
    expect(addUserDialogElement).toBeInTheDocument();
  });
  
  test('Sorts the users in ascending order when "Date of Birth (Ascending)" is clicked', () => {
    render(<App />);
    const sortButton = screen.getByText('Date of Birth (Ascending)');
    fireEvent.click(sortButton);
  
    const userList = screen.getAllByTestId('user-item');
  
    let prevDate = null;
    for (let i = 0; i < userList.length; i++) {
      const userItem = userList[i];
      const dobElement = userItem.querySelector('.dob-card');
      const dobText = dobElement?.textContent?.trim() ?? '';
  
      if (dobText !== '') {
        const currentDate = new Date(dobText);
  
        if (prevDate !== null) {
          expect(currentDate.getTime()).toBeGreaterThan(prevDate.getTime());
        }
  
        prevDate = currentDate;
      }
    }
  });

  test('Sorts the users in descending order when "Date of Birth (Descending)" is clicked', () => {
    render(<App />);
    const sortButton = screen.getByText('Date of Birth (Ascending)');
    fireEvent.click(sortButton);
    const descendButton = screen.getByText('Date of Birth (Descending)');
    fireEvent.click(descendButton);
  
    const userList = screen.getAllByTestId('user-item');
  
    let prevDate = null;
    for (let i = 0; i < userList.length; i++) {
      const userItem = userList[i];
      const dobElement = userItem.querySelector('.dob-card');
      const dobText = dobElement?.textContent?.trim() ?? '';
  
      if (dobText !== '') {
        const currentDate = new Date(dobText);
        if (prevDate !== null) {
          expect(currentDate.getTime()).toBeLessThan(prevDate.getTime());
        }
        prevDate = currentDate;
      }
    }
  });

  test('Toolbar component matches snapshot', () => {
    const setUserList = jest.fn();
    const { asFragment } = render(<Toolbar userList={userList} setUserList={setUserList} />)
    expect(asFragment()).toMatchSnapshot();
  });
});
