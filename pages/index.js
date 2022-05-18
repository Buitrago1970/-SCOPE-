import SectionMainDescription from "../components/SectionMainDescription"
import SectionShopProducts from "../components/SectionShopProducts"
import SectionInfoProduct from "../components/SectionInfoProduct"
import SectionShoppingCart from "../components/SectionShoppingCart"
import Contact from "../components/Contact"
import Orders from "../components/2/Orders"
import NavBar from "../components/NavBar"

import { device } from '../device/device';

import styled from 'styled-components'
import Factura from "../components/2Factura/Factura"
import PayForm from "../components/3PayForm/0PayForm"
import ConfirmOrder from "../components/4Success/ConfirmOrder"

const StyledHome = styled.div`
  display: grid; 
  grid-template-columns: 1.4fr 1.6fr 0.01fr; 
  grid-template-rows: 1.5fr 0.5fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "SectionMainDescription SectionShopProducts NavBar"
    "SectionMainDescription SectionShoppingCart NavBar"; 
  h1,h2,h3,h4,h5,h6,p{
    margin:0;
  }
    @media ${device.tablet} { 
    height: 80rem;
    grid-auto-columns: 1fr; 
    grid-template-columns: 2fr; 
    grid-template-rows: 0.1fr 1fr 1fr 1fr; 
    grid-template-areas: 
    "NavBar"
    "SectionMainDescription"
    "SectionShopProducts"
    "SectionShoppingCart"; 
  }
  `

export default function Home() {
  return (
    <StyledHome>
      {/* <SectionMainDescription /> */}
      <SectionInfoProduct />
      {/* <Factura /> */}
      <SectionShopProducts />
      <SectionShoppingCart />
      {/* <PayForm /> */}
      {/* <ConfirmOrder /> */}
      {/* <Contact /> */}
      <NavBar />
      {/* <Orders /> */}
    </StyledHome>
  )
}

