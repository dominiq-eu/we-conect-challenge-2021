import { FunctionComponent } from 'react'
import styled from 'styled-components'

import { El } from './El'
import { Column } from './Column'
import { Row } from './Row'
import { MenuItem } from '../Data/MenuItem'


//
// Helper
//

const doNothing = (): void => undefined

//
//  Helper Components
//

const MenuWrapper = styled(Column)`
  color: white;
  background-color: black;
`

const ItemWrapper = styled(El)<{
  selected?: boolean
}>`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  text-align: center;
  cursor: pointer;
  background: transparent;
  font-weight: ${(props) => props.selected ? 700 : 400};
  border: 0;
  outline: 0;
`
const Item = ItemWrapper.withComponent('button')


//
//  Component
//

export const Menu: FunctionComponent<{
  items: MenuItem[]
  selected?: MenuItem
  onChange?: (i: MenuItem) => void
}> = ({ items, selected, onChange = doNothing}) => {
  console.log("Menu: items:", items)
  return (
    <MenuWrapper>
      <Row isResponsive={true}>
        {items.map(
          item =>
            <Item
              selected={item.slug === selected?.slug}
              key={item.slug}
              onClick={() => onChange(item)}
            >
              {item.title}
            </Item>
        )}
      </Row>
    </MenuWrapper>
  )
}