import { Container, Form } from './styles';
import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
    return(
        <Container>
            <div className="logo"><Logo/></div>
            <Form>
                <h1>Faça login</h1>

                <label for="Email">
                    Email
                    <Input id="Email" name="Email" placeholder="Exemplo: email@email.com.br" type="text"/>
                </label>

                <label for="Senha">
                    Senha
                    <Input id="Senha" name="Senha" placeholder="No máximo 6 caracteres" type="password"/>
                </label>
                

                <Button title="Entrar" />
                <ButtonText to="/register" title="Criar uma conta" />
            </Form>
        </Container>
    );
}