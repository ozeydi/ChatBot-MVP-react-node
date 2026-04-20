import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MessageItem from './MessageItem';
import type { Message } from '@shared/types';
import '@testing-library/jest-dom';

describe('MessageItem Component', () => {
    it('should render user messages with blue background and right alignment', () => {
        const msg: Message = { id: '1', text: 'User text', sender: 'user', timestamp: Date.now() };
        const { container } = render(<MessageItem message={msg} />);

        const bubble = container.querySelector('.bg-blue-600');
        const wrapper = container.firstChild;

        expect(screen.getByText('User text')).toBeInTheDocument();
        expect(bubble).toBeInTheDocument();
        expect(wrapper).toHaveClass('items-end');
    });

    it('should render bot messages with white background and left alignment', () => {
        const msg: Message = { id: '2', text: 'Bot text', sender: 'bot', timestamp: Date.now() };
        const { container } = render(<MessageItem message={msg} />);

        const bubble = container.querySelector('.bg-white');
        const wrapper = container.firstChild;

        expect(bubble).toBeInTheDocument();
        expect(wrapper).toHaveClass('items-start');
    });
});
