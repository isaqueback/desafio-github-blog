import styled from 'styled-components'
import { smartphone, notebook } from '../../styles/themes/default'

export const HomeContainer = styled.div`
  position: absolute;
  width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 15rem;

  @media (${notebook}) {
    width: 100%;
    padding-bottom: 5rem;
  }

  @media (${smartphone}) {
    padding-bottom: 22rem;
  }
`

export const ProfileContainer = styled.section`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 2px 20px 0px rgb(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  padding-left: 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 2.5rem auto auto;
  column-gap: 2rem;

  img {
    grid-column: 1 / 2;
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  h1 {
    grid-column: 2 / 3;
    font-size: var(--title-l);
    color: ${(props) => props.theme['gray-100']};
    font-weight: 700;
  }

  div {
    grid-column: -2 / 5;
    display: flex;
    justify-content: flex-end;

    a {
      width: 4.125rem;
      height: 0.75rem;
      display: flex;
      gap: 0.52375rem;
      text-decoration: none;
      padding-bottom: 14px;
      transition: border-bottom 0.6s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['blue-300']};
      }

      span {
        text-transform: uppercase;
        font-size: var(--link);
        color: ${(props) => props.theme['blue-300']};
        line-height: 12.7px;
        font-weight: 700;
      }

      svg {
        fill: ${(props) => props.theme['blue-300']};
        width: 0.703125rem;
        height: 0.703125rem;
      }
    }
  }

  p {
    grid-column: 2 / 5;
    font-size: var(--text-m);
    color: ${(props) => props.theme['gray-300']};
    line-height: 26px;
  }

  ul {
    grid-column: 2 / 5;
    list-style-type: none;
    display: flex;
    column-gap: 1.25rem;
    margin-top: 2rem;

    li {
      display: flex;
      align-items: flex-end;
      gap: 0.75rem;
      color: ${(props) => props.theme['gray-200']};
      line-height: 15px;
    }

    svg {
      width: 1.055rem;
      height: 1.055rem;
      fill: ${(props) => props.theme['gray-500']};
    }
  }

  @media (${smartphone}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 1rem;
    height: auto;
    row-gap: 0.5rem;

    img {
      width: 6.25rem;
      height: 6.25rem;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin: 0 auto;
    }

    h1 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      margin-left: 0;
      text-align: center;
    }

    div {
      display: none;
    }

    p {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      margin: 0 0.5rem 0;
      display: flex;
      align-items: center;
      display: -webkit-box;
    }

    ul {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-top: 1rem;

      li {
        gap: 0.5rem;
      }

      li:nth-child(2),
      li:last-child {
        margin-left: 0;
        margin-top: 0.75rem;
      }
    }
  }

  @media (${notebook}) {
    width: 100%;
  }
`

export const SearchContainer = styled.div`
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

  @media (max-width: 1024px) {
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
    grid-template-rows: auto auto 1fr 1rem;
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
