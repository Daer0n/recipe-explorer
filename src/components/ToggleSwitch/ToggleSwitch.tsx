import React, { useState, ChangeEvent } from 'react';
import { useThemeContext } from '@context';

import { StyledLabel } from './styled';

export const ToggleSwitch = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [switchState, setSwitchState] = useState(theme === 'dark');

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSwitchState(event.target.checked);
        toggleTheme();
    };

    return (
        <StyledLabel htmlFor="checkbox" checked={switchState}>
            <input
                id="checkbox"
                type="checkbox"
                checked={switchState}
                onChange={handleOnChange}
                aria-label="Toggle switch"
            />
        </StyledLabel>
    );
};
