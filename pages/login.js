import React from 'react'


import SectionShoppingCart from "../components/SectionShoppingCart"
import NavBar from "../components/NavBar"
import Bill from "../components/2Factura/Factura"
import LoginComponent from "../components/login"
import RegisterForm from "../components/2/SectionRegisterForm"
import LoginForm from "../components/2/SectionLogin"

import { device } from '../device/device';


import styled from 'styled-components'

const StyledHome = styled.div`
display: grid; 
height:100vh;
  grid-template-columns: 1.5fr 1.5fr 0.07fr; 
  grid-template-rows: 1.3fr 0.5fr; 
  height: 100vh;
  grid-template-areas: 
    "Bill Login NavBar"
    "Bill SectionShoppingCart NavBar"; 
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  @media ${device.tablet} { 
    height: 80rem;
    grid-auto-columns: 1fr; 
    grid-template-columns: 2fr; 
    grid-template-rows: 0.1fr 1fr 1fr 1fr; 
    grid-template-areas: 
    "NavBar"
    "Login"
    "Bill"
    "SectionShoppingCart"; 
  }
`

export default function Login() {
  return (
    <StyledHome>
      <Bill />
      {/* <LoginForm /> */}
      {/* <LoginComponent /> */}
      <RegisterForm />
      <SectionShoppingCart />
      {/* <NavBar /> */}
    </StyledHome>
  )
}
