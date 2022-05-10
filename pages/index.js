import SectionMainDescription from "../components/SectionMainDescription"
import SectionShopProducts from "../components/SectionShopProducts"
import SectionShoppingCart from "../components/SectionShoppingCart"
import NavBar from "../components/NavBar"


import styled from 'styled-components'

const StyledHome = styled.div`
display: grid; 
  grid-template-columns: 1.5fr 1.5fr 0.07fr; 
  grid-template-rows: 1.3fr 0.5fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "SectionMainDescription SectionShopProducts NavBar"
    "SectionMainDescription SectionShoppingCart NavBar"; 
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  `
export default function Home() {
  return (
    <StyledHome>
      <SectionMainDescription />
      <SectionShopProducts />
      <SectionShoppingCart />
      <NavBar />
    </StyledHome>
  )
}

