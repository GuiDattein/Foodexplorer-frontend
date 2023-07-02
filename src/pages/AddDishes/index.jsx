import { Container, Content, Form } from './styles';

import { FiUpload } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';

export function AddDishes() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <Form>
                        <header>
                            <ButtonBack title="Voltar"/>
                            <h1>Adicionar prato</h1>
                        </header>

                        <div className="prato">
                            <label for="Imagem">
                                Imagem do prato
                                <Input Name="Imagem" id="Imagem" icon={FiUpload} type="file"/>
                            </label>
                            <label for="Prato">
                                Nome
                                <Input Name="Prato" id="Prato" placeholder="Ex.: Salada Ceasar" type="text"/>
                            </label>
                            <label for="Categoria">
                                Categoria
                                <select name="Categoria" id="Categoria">
                                    <option value="refeicoes">Refeições</option>
                                    <option value="Sobremesas">Sobremesas</option>
                                    <option value="Bebidas">Bebidas</option>
                                </select>
                            </label>

                        </div>

                    </Form>          
                </Content>
            </main>

            <Footer/>
        </Container>
    );
}