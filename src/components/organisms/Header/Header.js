import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import LogoImage from 'assets/Logo.png';
import Logo from 'components/atoms/Logo/Logo';
import Button from 'components/atoms/Buttons/Button';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0;
  background-color: ${({ theme }) => theme.backgroundBar};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 10px rgba(36, 36, 36, 0.09);
`;

const StyledLogo = styled.div`
  margin-left: 2%;
`;

const StyledLinksHeader = styled.div`
  margin-left: auto;
  margin-right: 4%;
  z-index: 900;
`;

const Header = ({ handleThemeStyle }) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledLogo>
        <Link to="/">
          <Logo src={LogoImage} />
        </Link>
      </StyledLogo>
      <StyledLinksHeader>
        <Button onClick={handleThemeStyle}>{t('styleChange')}</Button>
      </StyledLinksHeader>
    </StyledWrapper>
  );
};

Header.propTypes = {
  handleThemeStyle: PropTypes.func.isRequired,
};

export default Header;
