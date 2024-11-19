import React, { useState } from 'react';
import { ReactComponent as SelectCaret } from '@assets/images/SelectCaret.svg';

import { Container, Input, Caret, OptionsBlock, Option } from './styled';

interface SearchItemProps {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchType: string[];
}

export const SearchItem: React.FC<SearchItemProps> = ({
    placeholder,
    value,
    onChange,
    searchType,
}) => {
    const [dropped, setDropped] = useState(false);

    const handleInputDropdown = () => {
        setDropped((prev) => !prev);
    };

    const handleOptionClick = (key: string) => {
        const event = {
            target: {
                value: key === 'any' ? '' : key,
            },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
        setDropped(false);
    };

    return (
        <Container>
            <Input
                type="text"
                readOnly
                placeholder={placeholder}
                value={value}
                onClick={handleInputDropdown}
            />
            <Caret $dropped={dropped} onClick={handleInputDropdown}>
                <SelectCaret />
            </Caret>

            {dropped && (
                <OptionsBlock>
                    {searchType.map((value) => (
                        <Option onClick={() => handleOptionClick(value)} key={value}>
                            {value}
                        </Option>
                    ))}
                </OptionsBlock>
            )}
        </Container>
    );
};
