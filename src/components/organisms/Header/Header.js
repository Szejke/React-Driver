import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import LinksHeader from 'components/molecules/LinksHeader/LinksHeader';
import LogoImage from 'assets/Logo.png';
import Logo from 'components/atoms/Logo/Logo';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0;
  background: white;
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
`;

const Header = () => (
  <StyledWrapper>
    <StyledLogo>
      <Link to="/">
        <Logo src={LogoImage} />
      </Link>
    </StyledLogo>
    <StyledLinksHeader>
      <LinksHeader />
    </StyledLinksHeader>
  </StyledWrapper>
);

export default Header;
