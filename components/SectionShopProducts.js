import React from 'react'
import styled from 'styled-components'
import StyledCard from './0Products/StyledCard'
import { PortafolioObjCinco, PortafolioObjCuatro, PortafolioObjDos, PortafolioObjNueve, PortafolioObjOcho, PortafolioObjSeis, PortafolioObjSiete, PortafolioObjTres, PortafolioObjUno } from '../datos/ProductosDatos'

import { device } from '../device/device';


const StyledSectionShopProducts = styled.div`
    background-image: url("https://i.pinimg.com/564x/90/a2/eb/90a2eb6e6ba3f27ce03b1d62241c30c4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh;
    grid-area: SectionShopProducts;
@media ${device.tablet} { 
    height: 100rem;
    max-height: none;
        }
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
    height:100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
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
                <StyledCard{...PortafolioObjUno} />
                <StyledCard{...PortafolioObjDos} />
                <StyledCard{...PortafolioObjTres} />
                <StyledCard{...PortafolioObjCuatro} />
                <StyledCard{...PortafolioObjCinco} />
                <StyledCard{...PortafolioObjSeis} />
                <StyledCard{...PortafolioObjSiete} />
                <StyledCard{...PortafolioObjOcho} />
                <StyledCard{...PortafolioObjNueve} />
                <StyledCard{...PortafolioObjUno} />
                <StyledCard{...PortafolioObjDos} />
                <StyledCard{...PortafolioObjTres} />
                <StyledCard{...PortafolioObjCuatro} />
                <StyledCard{...PortafolioObjCinco} />
                <StyledCard{...PortafolioObjSeis} />
                <StyledCard{...PortafolioObjSiete} />
                <StyledCard{...PortafolioObjOcho} />
                <StyledCard{...PortafolioObjNueve} />
                <StyledCard{...PortafolioObjNueve} />



            </div>
        </StyledSectionShopProducts>
    )
}
