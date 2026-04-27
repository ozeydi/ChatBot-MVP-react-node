import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatInput from './ChatInput';
import '@testing-library/jest-dom';

describe('ChatInput Component', () => {
    it('should call onSend when form is submitted with valid text', () => {
        const handleSend = vi.fn();
        render(<ChatInput onSend={handleSend} disabled={false} />);

        const input = screen.getByLabelText(/message input/i);
        const button = screen.getByRole('button', { name: /send message/i });

        fireEvent.change(input, { target: { value: 'Hello Bot' } });
        fireEvent.click(button);

        expect(handleSend).toHaveBeenCalledWith('Hello Bot');
        expect(input).toHaveValue(''); // Should clear after send
    });

    it('should be disabled when the disabled prop is true', () => {
        render(<ChatInput onSend={vi.fn()} disabled={true} />);

        const input = screen.getByLabelText(/message input/i);
        const button = screen.getByRole('button', { name: /send message/i });

        expect(input).toBeDisabled();
        expect(button).toBeDisabled();
    });

    it('should not allow typing more than 500 characters', () => {
        render(<ChatInput onSend={vi.fn()} disabled={false} />);
        const input = screen.getByLabelText(/message input/i) as HTMLInputElement;

        const longText = 'a'.repeat(600);
        fireEvent.change(input, { target: { value: longText } });

        // We use waitFor because JSDOM doesn't enforce maxLength, 
        // so we must wait for React's state-based slice to trigger a re-render.
        waitFor(() => {
            expect(input.value.length).toBe(500);
        });
    });
});