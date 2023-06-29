import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => jest.resetAllMocks())
test('renders App component correctly', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders with no errors', () => {
  render(<App />);
});

test('renders the Toolbar component', () => {
  render(<App />);
  const toolbarComponent = screen.getByTestId('toolbar-component');
  expect(toolbarComponent).toBeInTheDocument();
});

test('renders the List component', () => {
  render(<App />);
  const listComponent = screen.getByTestId('list-component');
  expect(listComponent).toBeInTheDocument();
});
