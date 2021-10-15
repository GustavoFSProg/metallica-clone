import styled from 'styled-components'
import metallica from './assets/metallica.jpg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${metallica});
  background-size: cover;
  height: 100vh;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: black;
  height: 60px;
  color: white;
  padding-left: 50px;
`
export const A = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;
`
