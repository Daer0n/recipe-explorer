import { renderHook, act } from '@testing-library/react';

import { useScreenWidthSize } from './useScreenWithSize';

describe('useScreenWidthSize', () => {
    const originalInnerWidth = window.innerWidth;

    afterEach(() => {
        Object.defineProperty(window, 'innerWidth', {
            configurable: true,
            writable: true,
            value: originalInnerWidth,
        });
    });

    it('должен возвращать текущую ширину экрана при инициализации', () => {
        Object.defineProperty(window, 'innerWidth', {
            configurable: true,
            writable: true,
            value: 1024,
        });

        const { result } = renderHook(() => useScreenWidthSize());

        expect(result.current.screenWidth).toBe(1024);
    });

    it('должен обновлять ширину экрана при изменении размера окна', () => {
        const { result } = renderHook(() => useScreenWidthSize());

        act(() => {
            Object.defineProperty(window, 'innerWidth', {
                configurable: true,
                writable: true,
                value: 768,
            });

            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.screenWidth).toBe(768);
    });

    it('должен удалять event listener при размонтировании', () => {
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

        const { unmount } = renderHook(() => useScreenWidthSize());

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

        removeEventListenerSpy.mockRestore();
    });

    it('должен добавлять event listener при монтировании', () => {
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

        renderHook(() => useScreenWidthSize());

        expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

        addEventListenerSpy.mockRestore();
    });
});
