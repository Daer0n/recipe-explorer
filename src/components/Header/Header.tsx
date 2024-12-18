import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoLight } from '@assets/images/LogoLight.svg';
import { ReactComponent as LogoDark } from '@assets/images/LogoDark.svg';
import { ToggleSwitch } from '@components/ToggleSwitch';
import { useThemeContext } from '@context';
import { useScreenWidthSize } from '@hooks';
import { BurgerMenu } from '@components/BurgerMenu/BurgerMenu';
import { ReactComponent as BurgerIcon } from '@assets/images/BurgerIcon.svg';

import { Container, Wrapper, LogoContainer, LinkContainer, StyledLink } from './styled';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { theme } = useThemeContext();
    const { screenWidth } = useScreenWidthSize();
    const activeLink = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path: string) => () => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <Container>
            <Wrapper>
                <LogoContainer onClick={handleNavigation('/')}>
                    {theme === 'dark' ? <LogoDark /> : <LogoLight />}
                    Recipe explorer
                </LogoContainer>

                {screenWidth <= 600 ? (
                    <>
                        <BurgerIcon onClick={toggleMenu} />
                        {isMenuOpen && <BurgerMenu onClose={toggleMenu} />}
                    </>
                ) : (
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
                )}
            </Wrapper>
        </Container>
    );
};
