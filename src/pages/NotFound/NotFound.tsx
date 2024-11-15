import React from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { useNavigate } from 'react-router-dom';

import { Container, Wrapper, StatusCode, Title, Description, Button } from './styled';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header />

            <Wrapper>
                <StatusCode>404</StatusCode>
                <Title>OOOps! Page Not Found</Title>
                <Description>
                    This page doesn’t exist or was removed! We suggest you back to home
                </Description>
                <Button onClick={() => navigate('/')}>Back to homepage</Button>
            </Wrapper>
            <Footer />
        </Container>
    );
};
