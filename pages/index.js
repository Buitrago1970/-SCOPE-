import SectionMainDescription from "../components/SectionMainDescription"
import SectionShopProducts from "../components/SectionShopProducts"
import SectionInfoProduct from "../components/SectionInfoProduct"
import SectionShoppingCart from "../components/SectionShoppingCart"
import NavBar from "../components/NavBar"


import styled from 'styled-components'
import Factura from "../components/2Factura/Factura"
import PayForm from "../components/3PayForm/0PayForm"
import ConfirmOrder from "../components/4Success/ConfirmOrder"

const StyledHome = styled.div`
display: grid; 
height:100vh;
  grid-template-columns: 1.5fr 1.5fr 0.07fr; 
  grid-template-rows: 1.3fr 0.5fr; 
  gap: 0px 0px; 
  height: 100%;
  grid-template-areas: 
    "SectionMainDescription SectionShopProducts NavBar"
    "SectionMainDescription SectionShoppingCart NavBar"; 
  h1,h2,h3,h4,h5,h6,p{
    margin:0;
  }
  `
export default function Home() {
  return (
    <StyledHome>
      {/* <SectionMainDescription /> */}
      {/* <SectionInfoProduct /> */}
      <Factura />
      {/* <SectionShopProducts /> */}
      <SectionShoppingCart />
      {/* <PayForm /> */}
      <ConfirmOrder />
      <NavBar />
    </StyledHome>
  )
}

