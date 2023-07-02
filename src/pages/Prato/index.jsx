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
            
          <div class="prato">
            <img src={ravanello} alt="" />
          </div>

          <div className="sobre">
            <div class="descricao">
              <h2>{prato="Salada Ravanello"}</h2>
              <p>
                {descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."}
              </p>
            </div>

            <div class="tags">
                <Tags title="alface" />
                <Tags title="cebola" />
                <Tags title="pão naan" />
                <Tags title="pepino" />
                <Tags title="rabanete" />
                <Tags title="tomate" />
            </div>

            <div class="pedir">
              <Stepper/>
              <Button title="pedir " /*loading*/>
                <span>R$ {value="47,99"}</span>
              </Button>
            </div>
          </div>
        </Content>
      </main>

    <Footer />
    </Container>
  )
};