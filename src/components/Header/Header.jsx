import React from 'react';
import { HeaderBlock, HeaderWrapper, NavLinkStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <NavLinkStyled aria-current="page" to="/">
          PHONEBOOK
        </NavLinkStyled>

        {/* <NavLinkStyled to="/ContactForm">AddContact</NavLinkStyled> */}
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
