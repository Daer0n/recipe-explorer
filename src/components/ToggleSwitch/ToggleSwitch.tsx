import React, { useState, ChangeEvent } from 'react';

import { StyledLabel } from './styled';

export const ToggleSwitch = () => {
    const [switchState, setSwitchState] = useState(true);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSwitchState(!switchState);
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
