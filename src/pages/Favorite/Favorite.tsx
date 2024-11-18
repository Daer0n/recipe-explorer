import React from 'react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FavoriteRecipes } from '@components/FavoriteRecipes';

import { Container, Content } from './styled';

export const Favorite = () => {
    return (
        <Container>
            <Header />

            <Content>
                <FavoriteRecipes />
            </Content>

            <Footer />
        </Container>
    );
};
