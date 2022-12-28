import styled from 'styled-components'

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 10px;
  width: 54rem;
`

export const PostTitleContainer = styled.div`
  padding: 2rem;
  width: 100%;
  height: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 20px 0px rgb(0, 0, 0, 0.2);
  z-index: 1;

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
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  #post-title-container-footer {
    display: flex;
    gap: 2rem;

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
`

export const PostDescriptionContainer = styled.div`
  padding: 2.5rem 2rem;
`
