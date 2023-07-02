import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > h1{
        font-family: var(--roboto);
        font-weight: 700;
        font-size: 3.7rem;
        white-space: nowrap;
    }
    > svg {
        width: 43px;
        height: 43px;
    }

    @media (max-width: 370px){
        > h1 {
            font-size: 2.7rem;
        }
        > svg {
            width: 33px;
            height: 33px;
        }
    }
`;