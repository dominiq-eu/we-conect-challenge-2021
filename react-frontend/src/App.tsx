import { FunctionComponent, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { El } from './Components/El'
import { Menu } from './Components/Menu'
import { Embed } from './Components/Embed'
import { MenuItem } from './Data/MenuItem'
import * as Api from './Library/Api'


const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: stretch;
    flex-direction: column; 
    height: 100vh;
    box-sizing: border-box;
    border: 0;
    padding: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }
`

const Main = El.withComponent('main')

const Center = styled(El)`
  justify-content: center;
  align-items: center;
`

export const App: FunctionComponent = () => {
  const [state, setState] = useState<MenuItem[]>([])
  const [selected, setSelected] = useState<MenuItem>()

  useEffect(
    () => {
      Api
        .getMenus()
        .then(data => setState(data))
    }
  , [])

  return (
    <>
      <GlobalStyle />
      <nav>
        <Menu 
          items={state} 
          selected={selected} 
          onChange={
            (item) => {
              window.history.pushState('', item.title, item.slug)
              setSelected(item) 
            }
          }
        />
      </nav>
      <Main>
        {selected?.url
          ? <Embed src={selected.url}></Embed>
          : <Center>Nothing selected</Center>
        }
      </Main>
    </>
  )
}