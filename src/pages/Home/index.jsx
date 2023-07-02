import { Container, Content } from './styles';

import { FiChevronRight, FiChevronLeft  } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Cards } from '../../components/Cards';
import ravanello from '../../assets/ravanello.svg';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';

export function Home() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <div class="banner-desktop">
                        <img src={banner2} alt="" /> 
                        <div class="contentBanner">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingrdientes selecionados</p>
                        </div>
                    </div>
                    <div class="banner-mobile">
                        <img src={banner1} alt="" /> 
                        <div class="contentBanner">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingrdientes selecionados</p>
                        </div>
                    </div>

                        <Section title="Refeições">
                            <div class="slides">
                                <button class="arrow-left">&lt;</button>
                                <button class="arrow-right">&gt;</button>
                                <div class="cards">
                                    <Cards 
                                    image={ravanello}
                                    title="Salada Ravanello"
                                    descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                    value="47,99"
                                    />
                                    <Cards 
                                    image={ravanello}
                                    title="Salada Ravanello"
                                    descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                    value="47,99"
                                    />
                                    <Cards 
                                    image={ravanello}
                                    title="Salada Ravanello"
                                    descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                    value="47,99"
                                    />
                                    <Cards 
                                    image={ravanello}
                                    title="Salada Ravanello"
                                    descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                    value="47,99"
                                    />
                                    <Cards 
                                    image={ravanello}
                                    title="Salada Ravanello"
                                    descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                    value="47,99"
                                    />
                                    <Cards 
                                    image={ravanello}
                                    title="Salada Ravanello"
                                    descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                                    value="47,99"
                                    />
                                </div>
                            </div>
                        </Section>
                </Content>
            </main>

            <Footer/>
        </Container>
    );
}