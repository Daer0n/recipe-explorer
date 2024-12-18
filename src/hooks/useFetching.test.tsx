import React from 'react';
import { render, act } from '@testing-library/react';

import { useFetching } from './useFetching';

const TestComponent = ({ callback }: { callback: () => Promise<void> }) => {
    const [fetching, isLoading, error] = useFetching(callback);

    const handleClick = async () => {
        await fetching();
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Fetch
            </button>
            {isLoading && <p>Loading...</p>}
            {error && <p data-testid="error-message">{error}</p>}
        </div>
    );
};

describe('useFetching', () => {
    it('должен устанавливать isLoading в true во время выполнения запроса', async () => {
        const mockCallback = jest.fn().mockResolvedValueOnce(undefined);
        const { getByText } = render(<TestComponent callback={mockCallback} />);

        act(() => {
            getByText('Fetch').click();
        });

        expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('должен устанавливать isLoading в false после выполнения запроса', async () => {
        const mockCallback = jest.fn().mockResolvedValueOnce(undefined);
        const { getByText, queryByText } = render(<TestComponent callback={mockCallback} />);

        act(() => {
            getByText('Fetch').click();
        });

        expect(getByText('Loading...')).toBeInTheDocument();

        await act(async () => {
            await mockCallback();
        });

        expect(queryByText('Loading...')).toBeNull();
    });

    it('должен устанавливать error при возникновении ошибки', async () => {
        const mockCallback = jest.fn().mockRejectedValueOnce(new Error('Fetch failed'));
        const { getByText, getByTestId } = render(<TestComponent callback={mockCallback} />);

        act(() => {
            getByText('Fetch').click();
        });

        await act(async () => {
            await mockCallback();
        });

        expect(getByTestId('error-message').textContent).toBe('Fetch failed');
    });
});
