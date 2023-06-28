import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Cards } from '../../components/Cards';
import ravanello from '../../assets/ravanello.svg';

export function Home() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <div class="banner"></div>

                    <Section title="Refeições">
                        <Cards 
                        image={ravanello}
                        data={{
                            title: 'Salada Ravanello',
                            value: '47,99'
                        }}/>
                        <Cards 
                        image={ravanello}
                        data={{
                            title: 'Salada Ravanello',
                            value: '47,99'
                        }}/>
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