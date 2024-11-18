import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { GameItem } from '../components/GameItem';

describe('GameItem', () => {
  const mockItem = {
    id: '1',
    value: 'Test Item',
    shape: 'circle',
    color: '#000000',
    pattern: 'solid',
    isOddOne: false,
  };

  it('renders correctly', () => {
    const { container } = render(
      <GameItem
        item={mockItem}
        onClick={() => {}}
        disabled={false}
        isSelected={false}
        isCorrect={null}
      />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('calls onClick when clicked and not disabled', () => {
    const handleClick = vi.fn();
    const { container } = render(
      <GameItem
        item={mockItem}
        onClick={handleClick}
        disabled={false}
        isSelected={false}
        isCorrect={null}
      />
    );

    fireEvent.click(container.firstChild!);
    expect(handleClick).toHaveBeenCalledWith(mockItem);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    const { container } = render(
      <GameItem
        item={mockItem}
        onClick={handleClick}
        disabled={true}
        isSelected={false}
        isCorrect={null}
      />
    );

    fireEvent.click(container.firstChild!);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows correct visual feedback when selected and correct', () => {
    const { container } = render(
      <GameItem
        item={mockItem}
        onClick={() => {}}
        disabled={true}
        isSelected={true}
        isCorrect={true}
      />
    );
    expect(container.firstChild).toHaveClass('ring-4', 'ring-green-500');
  });

  it('shows correct visual feedback when selected and incorrect', () => {
    const { container } = render(
      <GameItem
        item={mockItem}
        onClick={() => {}}
        disabled={true}
        isSelected={true}
        isCorrect={false}
      />
    );
    expect(container.firstChild).toHaveClass('ring-4', 'ring-red-500');
  });
});