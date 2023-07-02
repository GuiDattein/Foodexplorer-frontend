import { Container } from './styles';

export function ButtonBack({title, ...rest}){
    return(
        <Container 
            type="button"
            {...rest}
        >
            <div>
                <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.863938C12.0976 1.25446 12.0976 1.88763 11.7071 2.27815L2.41421 11.571L11.7071 20.8639C12.0976 21.2545 12.0976 21.8876 11.7071 22.2782C11.3166 22.6687 10.6834 22.6687 10.2929 22.2782L0.292893 12.2782C-0.0976311 11.8876 -0.0976311 11.2545 0.292893 10.8639L10.2929 0.863938C10.6834 0.473414 11.3166 0.473414 11.7071 0.863938Z" fill="white"/>
                </svg>
                {title}
            </div>
        </Container>
    );
}