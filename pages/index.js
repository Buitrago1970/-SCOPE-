import SectionMainDescription from "../components/SectionMainDescription"
import SectionShopProducts from "../components/SectionShopProducts"
import SectionInfoProduct from "../components/SectionInfoProduct"
import SectionShoppingCart from "../components/SectionShoppingCart"
import Contact from "../components/Contact"
import Orders from "../components/2/Orders"
import NavBar from "../components/NavBar"


import styled from 'styled-components'

const StyledHome = styled.div`
  display: grid; 
  grid-template-columns: 1.4fr 1.6fr 0.00001fr; 
  grid-template-rows: 1.5fr 0.5fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "SectionMainDescription SectionShopProducts NavBar"
    "SectionMainDescription SectionShoppingCart NavBar"; 
  `
export default function Home() {
  return (
    <StyledHome>
      <SectionMainDescription />
      {/* <SectionInfoProduct /> */}
      {/* <SectionShopProducts /> */}
      {/* <Orders /> */}
      <Contact />
      <SectionShoppingCart />
      <NavBar />
    </StyledHome>
  )
}

