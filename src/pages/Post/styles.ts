import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 54rem;
  width: 100%;
`

export const PostTitleContainer = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 20px 0px rgb(0, 0, 0, 0.2);
  row-gap: 0.5rem;

  #post-title-container-toolbar {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['blue-300']};
      }

      span {
        font-size: var(--link);
        color: ${(props) => props.theme['blue-300']};
        text-transform: uppercase;
        font-weight: 700;
      }

      svg {
        width: 0.75rem;
        height: 0.75rem;
        fill: ${(props) => props.theme['blue-300']};
        margin-left: 0.5rem;
      }

      svg:first-child {
        margin: 0 0.5rem 0 0;
      }
    }
  }

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: var(--title-l);
  }

  #post-title-container-footer {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    div {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['gray-400']};

      svg {
        margin-right: 0.5rem;
        width: 1.125rem;
        height: 1.125rem;
        fill: ${(props) => props.theme['gray-500']};
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    min-width: 100%;

  }

  @media (max-width: 670px) {
    #post-title-container-footer {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`

export const PostDescriptionContainer = styled.div`
  padding: 2.5rem 2rem 10rem;
  color: ${(props) => props.theme['gray-300']};

  h2 {
    color: ${(props) => props.theme['blue-300']};
    font-size: var(--text-m);
    font-weight: 400;
    border-bottom: 1px solid ${(props) => props.theme['blue-300']};
    display: inline-block;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 1024px) {
    padding: 2.5rem 1rem 10rem;
  }
`
