import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  left: 20px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  padding: 8px 12;
  width: 172px;
  height: 32px;
`
