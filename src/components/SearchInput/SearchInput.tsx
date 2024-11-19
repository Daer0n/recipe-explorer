import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '@assets/images/SearchIcon.svg';
import { z } from 'zod';

import { Button, Container, Input, ErrorMessage, InputWrapper } from './styled';

interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => Promise<void>;
}

const schema = z.string().min(3, { message: 'The search hint must be 3 or more characters long!' });

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onClick }) => {
    const [error, setError] = useState<string | null>(null);

    const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        const inputValue = event.target.value;

        try {
            schema.parse(inputValue);
            setError(null);
        } catch (err) {
            if (err instanceof z.ZodError) {
                setError(err.errors[0].message);
            }
        }
    };

    const handleClick = () => {
        (async () => {
            try {
                schema.parse(value);
                await onClick();
                setError(null);
            } catch (err) {
                if (err instanceof z.ZodError) {
                    setError(err.errors[0].message);
                }
            }
        })();
    };

    return (
        <Container>
            <InputWrapper>
                <Input
                    name="query"
                    type="text"
                    value={value}
                    onChange={handleValidation}
                    placeholder="Search Your Favorite Food"
                    hasError={Boolean(error)}
                />
                <Button type="button" onClick={handleClick}>
                    <SearchIcon />
                </Button>
            </InputWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};
