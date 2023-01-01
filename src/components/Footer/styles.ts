import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: auto;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme["gray-300"]};
    
    a {
        text-decoration: none;
        transition: color 0.2s;

        &:visited {
            color: ${props => props.theme["gray-300"]};
        }
        
        &:hover {;
            color: ${props => props.theme["gray-200"]};
        }
    }
`