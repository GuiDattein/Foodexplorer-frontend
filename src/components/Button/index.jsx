import { Container } from "./styles";

export function Button({ title, img, children, loading = false, ...rest }){
    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {img && <img src={img}/>}
            {title}
            {children}
        </Container>
    )
}