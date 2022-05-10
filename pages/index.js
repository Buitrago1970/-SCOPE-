// import SectionMainDescription from "../components/SectionMainDescription"
import SectionShopProducts from "../components/SectionShopProducts"
import SectionInfoProduct from "../components/SectionInfoProduct"
import SectionShoppingCart from "../components/SectionShoppingCart"
import NavBar from "../components/NavBar"


import styled from 'styled-components'

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
  `
export default function Home() {
  return (
    <StyledHome>
      {/* <SectionMainDescription /> */}
      <SectionInfoProduct />
      <SectionShopProducts />
      <SectionShoppingCart />
      <NavBar />
    </StyledHome>
  )
}

