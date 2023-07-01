import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    border-radius: 5px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    > input {
        width: 100%;
        height: 48px;

        padding: 12px 14px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }
    }

    > svg {
            margin-left: 14px;
        }
`;