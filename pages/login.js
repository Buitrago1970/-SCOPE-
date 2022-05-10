import React from 'react'


import SectionShoppingCart from "../components/SectionShoppingCart"
import NavBar from "../components/NavBar"
import Bill from "../components/2Factura/Factura"
import LoginComponent from "../components/login"


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
`

export default function Login() {
    return (
        <StyledHome>
            <Bill />
            <LoginComponent />
            <SectionShoppingCart />
            <NavBar />
        </StyledHome>
    )
}
