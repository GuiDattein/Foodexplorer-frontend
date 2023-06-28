import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Tags } from '../../components/Tags';
import ravanello from '../../assets/ravanello.svg';
import Receipt from '../../assets/Receipt.svg';
import { Stepper } from '../../components/Stepper';

export function Prato() {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Voltar"/>

          <div class="descricao">
            <img src={ravanello} alt="" />
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
          </div>

          <div class="tags">
              <Tags title="alface" />
              <Tags title="cebola" />
              <Tags title="pãonaan" />
              <Tags title="pepino" />
              <Tags title="rabanete" />
              <Tags title="tomate" />
          </div>

          <div class="pedir">
            <Stepper/>
            <Button title="pedir - R$ 0,00 " /*loading*/ />           
          </div>
        </Content>
      </main>

      <Footer />
    </Container>
  )
};