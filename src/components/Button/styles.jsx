import styled from 'styled-components'
import { darken } from 'polished'


export const Wrapper = styled.div`
  color: rgb(255, 255, 255);
  background: rgb(31,79,135);
  background: linear-gradient(-90deg, rgba(3,181,183,1) 0%, rgba(66,123,192,1) 100%);
  border-radius: 7px;
  font-weight: 700;
  border: none;
  height: 60px;
  width: 450px;
  font-size: 18px;
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.hover {
    background: rgb(31,79,145);
  }
`