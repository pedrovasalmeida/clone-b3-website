/** Packages */
import React from 'react';
import { useHistory } from 'react-router-dom';

/** My Components */
import { Container, WarningIcon, Button } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <h1>
        <WarningIcon size={100} />
        Página não encontrada
      </h1>
      <span>
        A página que você solicitou não existe ou não pode ser encontrada.
        Utilize o campo de busca para procurar um conteúdo semelhante ao
        desejado.
      </span>

      <span>
        <strong>Desculpe-nos pelo transtorno!</strong>
      </span>

      <Button type="button" onClick={handleBackToHome}>
        <span>Acessar página inicial</span>
      </Button>
    </Container>
  );
};

export default Home;
