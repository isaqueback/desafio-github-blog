import styled from 'styled-components'
import { notebook } from '../../styles/themes/default'

export const HomeContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (${notebook}) {
    width: 100%;
  }
`
