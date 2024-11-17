import React from 'react';

import { Container, Title, Line } from './styled';

interface SectionHeaderProps {
    title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <Container>
            <Line />
            <Title>{title}</Title>
        </Container>
    );
};
