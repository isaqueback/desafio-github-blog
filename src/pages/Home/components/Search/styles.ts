import styled from 'styled-components'
import { notebook } from '../../../../styles/themes/default'

export const SearchContainer = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: var(--title-s);
    color: ${(props) => props.theme['gray-200']};

    span {
      color: ${(props) => props.theme['gray-400']};
      font-size: var(--text-s);
    }
  }

  @media (${notebook}) {
    margin: 1.5rem 1rem 0;
  }

  input {
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['gray-600']};
    background-color: ${(props) => props.theme['gray-1000']};
    font-size: var(--text-m);
    color: ${(props) => props.theme['gray-300']};
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['blue-300']};
    }
  }
`
