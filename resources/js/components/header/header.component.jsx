import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.png';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

const Header = () => (
  <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="logoimage" />
        </Link>
      </LogoContainer>
      <OptionsContainer>
          <OptionLink to='/login'>
              LOGIN
          </OptionLink>
          <OptionLink to='/register'>
              REGISTER
          </OptionLink>
      </OptionsContainer>
  </HeaderContainer>
)

export default Header;