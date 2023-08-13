import { Container, Content, Form } from './styles';

import { FiUpload } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { PratosItem } from '../../components/PratosItem';

export function AddDishes() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <Form>
                        <header>
                            <ButtonBack to="/" title="Voltar"/>
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
                        <div className="ingredientes">
                            <label htmlFor="itens">
                                Ingredientes
                                <PratosItem value="Teste"  />
                                <PratosItem isNew />
                            </label>
                        </div>
                        <div className="description">
                            <label htmlFor="Description">
                                Descrição
                                <Textarea Name="Description" id="Description" placeholder="Fale brevemente sobre o prato, seus ingredientes e preparação" type="text"/>
                            </label>
                        </div>

                    </Form>          
                </Content>
            </main>

            <Footer/>
        </Container>
    );
}