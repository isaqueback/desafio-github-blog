import styled from 'styled-components'
import { notebook, smartphone } from '../../../../styles/themes/default'

export const PostsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    background-color: ${(props) => props.theme['gray-700']};
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 10px;
    height: 16.25rem;
    transition: border 0.2s;

    &:hover {
      border: 2px solid ${(props) => props.theme['gray-500']};
    }

    section {
      padding: 2rem;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: auto 1fr;
      row-gap: 1.25rem;

      h2 {
        color: ${(props) => props.theme['gray-100']};
        line-height: 28px;
        font-size: var(--title-m);
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
      }

      span {
        font-size: var(--text-s);
        color: ${(props) => props.theme['gray-400']};
        padding-top: 7px;
        letter-spacing: -1px;
      }

      p {
        display: -webkit-box;
        color: ${(props) => props.theme['gray-300']};
        -webkit-line-clamp: 4;
        overflow: hidden;
        -webkit-box-orient: vertical;
        height: max-content;
      }
    }
  }

  @media (${smartphone}) {
    grid-template-columns: 1fr;
    padding: 0 0.25rem;

    a {
      section {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;
        row-gap: 0.5rem;
        padding: 1rem;

        h2 {
          grid-row: 1 / 2;
        }

        span {
          grid-row: 2 / 3;
          padding-top: 0;
        }

        p {
          grid-row: 3 / 4;
          padding-top: 0.75rem;
        }
      }
    }
  }

  @media (${notebook}) {
    a {
      section {
        grid-template-columns: auto;
        grid-template-rows: auto auto 1fr;
        row-gap: 0rem;

        span {
          margin-top: -0.1rem;
        }

        p {
          margin-top: 1.1rem;
        }
      }
    }
  }
`
