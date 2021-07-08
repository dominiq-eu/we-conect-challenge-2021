import styled from 'styled-components'
import { El } from './El'


export const Row = styled(El)<{
  isReverse?: boolean
  isResponsive?: boolean
}>`
  flex-direction: ${(props) => props?.isReverse ? 'row-reverse' : 'row'};
  width: auto;
  align-items: center; 
  ${(props) =>
      props?.isResponsive
        ? props?.isReverse
          ? '@media (max-width: 768px) { flex-direction: column-reverse; }'
          : '@media (max-width: 768px) { flex-direction: column; }'
        : undefined
  }

`