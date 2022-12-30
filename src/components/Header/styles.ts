import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  display: flex;
  justify-content: space-between;

  svg:first-child {
    margin-top: 4.375rem;
  }

  svg:nth-child(2) {
    margin: 4rem calc(100vw / 2 - 409px - 76.5px);
  }

  svg:last-child {
    margin-top: 1.875rem;
  }

  svg:first-child,
  svg:nth-child(2),
  svg:last-child {
    max-height: 100%;
    max-width: 100%;
  }

  @media (max-width: 670px) {
    height: 10rem;

    svg:nth-child(2) {
      align-self: center;
    }

    svg:first-child,
    svg:last-child {
      margin-top: 0;
    }
  }
`
