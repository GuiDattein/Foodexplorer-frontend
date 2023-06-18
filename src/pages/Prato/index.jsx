import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

export function Prato() {

  return(
    <Container>
      <Header />
      <Button title="pedir - R$ 0,00 " /*loading*/ />

      <Footer />
    </Container>
  )
};