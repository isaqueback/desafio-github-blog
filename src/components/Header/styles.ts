import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 18.5rem;
    background-color: ${props => props.theme["gray-800"]};
`

export const HeaderContent = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 25.5625rem 1fr 23.1875rem;

    img:first-child {
        margin-top: 4.375rem;
    }
    
    img:nth-child(2) {
        margin: 4rem calc(100vw / 2 - 409px - 76.5px);
    }
    
    img:last-child {
        margin-top: 1.875rem;
    }
`