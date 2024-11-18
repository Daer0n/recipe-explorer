import React from 'react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { SearchBar } from '@components/SearchBar';

import { Container, Content } from './styled';

export const Home = () => {
    return (
        <Container>
            <Header />

            <Content>
                <SearchBar />
            </Content>

            <Footer />
        </Container>
    );
};
