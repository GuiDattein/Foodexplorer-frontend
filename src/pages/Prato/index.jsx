import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Tags } from '../../components/Tags';

export function Prato() {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Voltar"/>

          <Section title="Salada Ravanello">
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
          </Section>

          <Section title="">
            <Tags title="alface" />
            <Tags title="cebola" />
            <Tags title="pão naan" />
            <Tags title="pepino" />
            <Tags title="rabanete" />
            <Tags title="tomate" />
          </Section>

          <Button title="pedir - R$ 0,00 " /*loading*/ />
        </Content>
      </main>

      <Footer />
    </Container>
  )
};