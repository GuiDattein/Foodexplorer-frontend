import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Cards } from '../../components/Cards';
import ravanello from '../../assets/ravanello.svg';
import banner from '../../assets/banner1.png';

export function Home() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <div class="banner">
                        <img src={banner} alt="" /> 
                        <div class="contentBanner">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingrdientes selecionados</p>
                        </div>
                        
                    </div>

                    <Section title="Refeições">
                        <Cards 
                        image={ravanello}
                        data={{
                            title: 'Salada Ravanello',
                            value: '47,99'
                        }}/>
                    </Section>

                    <Section title="Pratos principais">
                        <Cards 
                        image={ravanello}
                        data={{
                            title: 'Salada Ravanello',
                            value: '47,99'
                        }}/>
                    </Section>

                    <Section title="Bebidas">
                        <Cards 
                        image={ravanello}
                        data={{
                            title: 'Salada Ravanello',
                            value: '47,99'
                        }}/>
                    </Section>
                </Content>
            </main>

            <Footer/>
        </Container>
    );
}