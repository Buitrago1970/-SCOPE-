{/* ------ [ 1 ] ------ */ }
import SectionMainDescription from "../components/SectionMainDescription"

{/* ------ [ 2 ] ------ */ }

import SectionShopProducts from "../components/SectionShopProducts"

{/* ------ [ 3 ] ------ */ }
import NavBar from "../components/NavBar"

import { device } from '../device/device';
import styled from 'styled-components'




const StyledHome = styled.div`
  display: grid; 
  grid-template-columns: 1.5fr 1.5fr 0.07fr; 
  grid-template-rows: 1fr ; 
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
      <SectionMainDescription />
      <SectionShopProducts />
      <NavBar />
    </StyledHome>
  )
}

