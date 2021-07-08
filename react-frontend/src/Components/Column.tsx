import styled from 'styled-components'
import { El } from './El'

export const Column = styled(El)<{
  isReverse?: boolean
}>`
  flex-direction: ${props => props.isReverse ? 'column-reverse' : 'column'};
`