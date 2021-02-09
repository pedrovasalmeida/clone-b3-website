import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container, LogoImg } from './styles';

const Logo =
  'http://www.b3.com.br/lumis-theme/br/com/bvmf/internet/theme/bvmf-internet/img/logo-b3.png';

const Header: React.FC = () => {
  const history = useHistory();

  const handleClickOnLogo = () => {
    history.push('/');
  };

  return (
    <Container>
      <LogoImg src={Logo} alt="B3" onClick={handleClickOnLogo} />
    </Container>
  );
};

export default Header;
