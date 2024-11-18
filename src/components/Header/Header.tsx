import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoLight } from '@assets/images/LogoLight.svg';
import { ReactComponent as LogoDark } from '@assets/images/LogoDark.svg';
import { ToggleSwitch } from '@components/ToggleSwitch';
import { useThemeContext } from '@context';

import { Container, Wrapper, LogoContainer, LinkContainer, StyledLink } from './styled';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { theme } = useThemeContext();

    const activeLink = location.pathname;

    const handleNavigation = (path: string) => () => {
        navigate(path);
    };

    return (
        <Container>
            <Wrapper>
                <LogoContainer onClick={handleNavigation('/')}>
                    {theme === 'dark' ? <LogoDark /> : <LogoLight />}
                    Modsen recipe
                </LogoContainer>

                <nav>
                    <LinkContainer>
                        <StyledLink onClick={handleNavigation('/')} isActive={activeLink === '/'}>
                            Home
                        </StyledLink>
                        <StyledLink
                            onClick={handleNavigation('/favorites')}
                            isActive={activeLink === '/favorites'}
                        >
                            Cooked
                        </StyledLink>
                        <ToggleSwitch />
                    </LinkContainer>
                </nav>
            </Wrapper>
        </Container>
    );
};
