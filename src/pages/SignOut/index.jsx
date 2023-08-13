import { Container, Form } from './styles';
import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignOut(){
    return(
        <Container>
            <div className="logo"><Logo/></div>
            <Form>
                <h1>Crie sua conta</h1>

                <label for="Nome">
                    Nome
                    <Input id="Nome" name="Nome" placeholder="Seu nome" type="text"/>
                </label>

                <label for="Email">
                    Email
                    <Input id="Email" name="Email" placeholder="email@exemplo.com.br" type="text"/>
                </label>

                <label for="Senha">
                    Senha
                    <Input id="Senha" name="Senha" placeholder="No máximo 6 caracteres" type="password"/>
                </label>
                

                <Button title="Criar conta" />
                <ButtonText to="/" title="Já tenho uma conta" />
            </Form>
        </Container>
    );
}