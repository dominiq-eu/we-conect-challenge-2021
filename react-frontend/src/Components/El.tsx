/*
  El.tsx

  This is the base component that builds on flexbox. Every other
  component should derive from it. Inspired by:
  https://package.elm-lang.org/packages/mdgriffith/elm-ui/latest/Element
*/
import styled from 'styled-components'


export const El = styled.div`
  display: flex;
  flex: 1;
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
`

