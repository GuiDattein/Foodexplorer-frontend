import { Container } from "./styles";
import Receipt from "../../assets/Receipt.svg";

export function ButtonPedido({ title, loading = false, ...rest }){
    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            <img src={Receipt} alt="" />
            {title}
        </Container>
    )
}