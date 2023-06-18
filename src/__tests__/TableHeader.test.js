import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TableHeader from '../TableHeader/TableHeader';

describe('Test the TableHeader component', () => {
    test('render TableHeader component', () => {
      render(<TableHeader />);
      const tableElement = screen.getByText('ID')
      expect(tableElement).toBeInTheDocument();
    });
  })