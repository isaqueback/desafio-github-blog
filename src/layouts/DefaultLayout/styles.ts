import styled from 'styled-components'
import { notebook, smartphone } from '../../styles/themes/default'

export const DefaultLayoutContainer = styled.main`
  margin: -5.5rem 18rem 5rem;
  display: flex;
  justify-content: center;
  height: 100%;

  @media (${notebook}) {
    margin: 2rem 0 5rem;
    padding-bottom: 1rem;
  }

  @media (${smartphone}) {
    margin-bottom: 5rem;
  }
`
