import { Container } from './styles';

export function ButtonIncluir({ title, ...rest}) {
    return(
        <Container {...rest}>
            {title}
        </Container>        
    );
}