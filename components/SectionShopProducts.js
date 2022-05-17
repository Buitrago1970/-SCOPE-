import React from 'react'
import styled from 'styled-components'
import StyledCard from './0Products/StyledCard'
import { PortafolioObjCinco, PortafolioObjCuatro, PortafolioObjDos, PortafolioObjNueve, PortafolioObjOcho, PortafolioObjSeis, PortafolioObjSiete, PortafolioObjTres, PortafolioObjUno } from '../datos/ProductosDatos'

import { device } from '../device/device';


const StyledSectionShopProducts = styled.div`
background-color: pink;
display:flex;
max-height:73vh;
grid-area: SectionShopProducts;
@media ${device.tablet} { 
    height: 100rem;
    max-height: none;
        }
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items:center;
    
    margin: 0 auto;
    overflow: auto;
}
`


export default function SectionShopProducts() {
    return (
        <StyledSectionShopProducts>
            {/* <StyledCard /> */}
            <div className="container">
                <StyledCard{...PortafolioObjUno} />
                <StyledCard{...PortafolioObjDos} />
                <StyledCard{...PortafolioObjTres} />
                <StyledCard{...PortafolioObjCuatro} />
                <StyledCard{...PortafolioObjCinco} />
                <StyledCard{...PortafolioObjSeis} />
                <StyledCard{...PortafolioObjSiete} />
                <StyledCard{...PortafolioObjOcho} />
                <StyledCard{...PortafolioObjNueve} />
            </div>
        </StyledSectionShopProducts>
    )
}
