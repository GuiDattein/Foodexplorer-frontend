import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Tags } from '../../components/Tags';
import ravanello from '../../assets/ravanello.svg';
import Receipt from '../../assets/Receipt.svg';
import { Stepper } from '../../components/Stepper';

export function Prato(prato, descricao, value) {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Voltar"/>

          <div class="descricao">
            <img src={ravanello} alt="" />
            <h2>{prato="Salada Ravanello"}</h2>
            <p>
              {descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
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
            <Button img={Receipt} title="pedir - " /*loading*/>
              <span>RS {value="47,99"}</span>
            </Button>     

          </div>
        </Content>
      </main>

      <Footer />
    </Container>
  )
};