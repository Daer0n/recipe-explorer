import React from 'react';
import { Router } from '@components/Router';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@themes';
import { ThemeProvider, useThemeContext } from '@context';

import { Container } from './styled';

const ThemedApp: React.FC = () => {
    const { theme } = useThemeContext();
    const currentTheme = theme === 'dark' ? lightTheme : darkTheme;

    return (
        <StyledThemeProvider theme={currentTheme}>
            <Container>
                <Router />
            </Container>
        </StyledThemeProvider>
    );
};

export const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
};
