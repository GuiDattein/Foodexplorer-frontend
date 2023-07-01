import { Container, Content } from './styles';

import { FiSearch } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Cards } from '../../components/Cards';
import ravanello from '../../assets/ravanello.svg';
import banner2 from '../../assets/banner1.png';

export function Home() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <div class="banner">
                        <img src={banner2} alt="" /> 
                        <div class="contentBanner">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingrdientes selecionados</p>
                        </div>
                    </div>

                    <Section title="Refeições">
                        <div class="slides">
                            <div class="cards">
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
                            </div>
                        </div>
                    </Section>

                    <Section title="Pratos principais">
                        <div class="slides">
                                <div class="cards">
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
                                </div>
                        </div>
                    </Section>

                    <Section title="Bebidas">
                    <div class="slides">
                            <div class="cards">
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
                            </div>
                    </div>
                    </Section>
                </Content>
            </main>

            <Footer/>
        </Container>
    );
}