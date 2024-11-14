import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoLight } from '@assets/images/LogoLight.svg';
import { ToggleSwitch } from '@components/ToggleSwitch';

import { Container, Wrapper, LogoContainer, LinkContainer, StyledLink } from './styled';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const activeLink = location.pathname;

    const handleNavigation = (path: string) => () => {
        navigate(path);
    };

    return (
        <Container>
            <Wrapper>
                <LogoContainer onClick={handleNavigation('/')}>
                    <LogoLight />
                    <span>Modsen recipe</span>
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
