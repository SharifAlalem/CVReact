
import {render,screen } from '@testing-library/react';
import ProgressBar from '@/components/Progress/progress';

describe('Page', () => {
  it('renders a progress bar as unordered list', () => {
    render(<ProgressBar />)
    const progress = screen.getByRole('list')
    expect(progress).toBeInTheDocument();
  })
})

describe('Page', () => {
    it('the progress bar has Six steps', () => {
      render(<ProgressBar />)
      const progress = screen.getByRole('list');
      const listItems = progress.children.length;
      expect(listItems).toBe(6);
    })
})

describe('Page', () => {
    it('each step in the progress bar has one icon', () => {
      render(<ProgressBar />)
      const progress = screen.getByRole('list');
      const progressSteps = progress.getElementsByTagName('span');
      expect(progressSteps.length).toBe(6);
    })
})
