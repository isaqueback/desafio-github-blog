import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: absolute;
  width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 14.625rem;
`

export const ProfileContainer = styled.section`
  width: 100%;
  height: 13.25rem;
  border-radius: 10px;
  box-shadow: 0px 2px 20px 0px rgb(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  padding-left: 2.5rem;
  display: grid;
  grid-template-columns: 9.25rem 16.75rem 1fr;
  grid-template-rows: 2.5rem 3.875rem 1fr;

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
    margin-left: 2rem;
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
    margin-left: 2rem;
    font-size: var(--text-m);
    color: ${(props) => props.theme['gray-300']};
    line-height: 26px;
  }

  ul {
    grid-column: 2 / 5;
    list-style-type: none;
    display: flex;
    padding-left: 2rem;

    li {
      display: flex;
      align-items: flex-end;
      gap: 0.75rem;
      color: ${(props) => props.theme['gray-200']};
      line-height: 15px;

      span {
        font-size: var(--text-m);
      }
    }

    li:not(:first-child) {
      margin-left: 20px;
    }

    svg {
      width: 1.055rem;
      height: 1.055rem;
      fill: ${(props) => props.theme['gray-500']};
    }
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

    &:hover {
      border: 2px solid ${(props) => props.theme['gray-500']};
    }

    section {
      padding: 2rem;
      transition: border 0.2s;

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          color: ${(props) => props.theme['gray-100']};
          width: 17.52rem;
          line-height: 32px;
          font-size: var(--title-m);
        }

        span {
          font-size: var(--text-s);
          color: ${(props) => props.theme['gray-400']};
          padding-top: 7px;
          letter-spacing: -1px;
        }
      }

      p {
        color: ${(props) => props.theme['gray-300']};
        margin-top: 1.25rem;
      }
    }
  }
`
