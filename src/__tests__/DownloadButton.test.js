import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DownloadButton from '../DownloadButton/DownloadButton';

describe('Test the DownloadButton component', () => {
    test('render DownloadButton component', () => {
      render(<DownloadButton />);
      const buttonElement = screen.getByText('Download CSV File')
      expect(buttonElement).toBeInTheDocument();
    });
  })