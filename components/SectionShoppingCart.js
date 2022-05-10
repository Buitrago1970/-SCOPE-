import React from 'react'
import styled from 'styled-components'

const StyledSectionShoppingCart = styled.div`
background-color: #E1D9CE;
border: 1px solid black;
grid-area: SectionShoppingCart;
font-family: 'Cinzel', serif;
`
const StyledShoppingCartMiniHeader = styled.div`
border-bottom: 1px solid black;
display: flex ;
justify-content: space-between;
padding-right: 15px;
font-size: 12px;
`
const StyledShoppingCartMiniNavBar = styled.div`
`
const StyledShoppingCartMiniProductsTable = styled.div`
display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  text-align: center;
`
const StyledContainerPShoppingCart = styled.div`
border-right: 1px solid black;
width: 20%;
text-align: center;
`
const StyledContainerShoppingCartNavbar = styled.div`
display: flex;
justify-content: center;
text-align: center;
border-bottom: 1px solid black;
margin: 0px 20px;
`
const StyledContainerItemShoppingCart = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  padding: 7px;
  font-size: 12px;
`
const StyledShoppingTotal = styled.div`
    display: flex;
    height: 27px;
    justify-content: flex-end;
    align-items: center;
    margin: 10px 20px;
    border-top: 1px solid;
`
const StyledContainerPTotalShoppingCart = styled.div`
width: 20%;
text-align: center;
`
const StyledP = styled.p`
margin: 0;
`
export default function SectionShoppingCart() {
    return (
        <StyledSectionShoppingCart>
            <StyledShoppingCartMiniHeader>
                <StyledContainerPShoppingCart>
                    <StyledP>3 .2022</StyledP>
                </StyledContainerPShoppingCart>
                <StyledP>{'<3'}</StyledP>
            </StyledShoppingCartMiniHeader>
            <StyledShoppingCartMiniNavBar>
                <StyledContainerShoppingCartNavbar>
                    <StyledP>
                        Resumen CARRITO
                    </StyledP>
                </StyledContainerShoppingCartNavbar>
            </StyledShoppingCartMiniNavBar>
            <StyledShoppingCartMiniProductsTable>
                <StyledContainerItemShoppingCart>
                    <StyledP>01.</StyledP>
                    <StyledP>SCOPE T-Shirt XL</StyledP>
                    <StyledP>UNI:1</StyledP>
                    <StyledP>$67.000</StyledP>
                </StyledContainerItemShoppingCart>
                <StyledContainerItemShoppingCart>
                    <StyledP>01.</StyledP>
                    <StyledP>SCOPE T-Shirt XL</StyledP>
                    <StyledP>UNI:2</StyledP>
                    <StyledP>$23.000</StyledP>
                </StyledContainerItemShoppingCart>
                <StyledContainerItemShoppingCart>
                    <StyledP>01.</StyledP>
                    <StyledP>SCOPE T-Shirt XL</StyledP>
                    <StyledP>UNI:2</StyledP>
                    <StyledP>$888.000</StyledP>
                </StyledContainerItemShoppingCart>
                <StyledContainerItemShoppingCart>
                    <StyledP>01.</StyledP>
                    <StyledP>SCOPE T-Shirt XL</StyledP>
                    <StyledP>UNI:2</StyledP>
                    <StyledP>$888.000</StyledP>
                </StyledContainerItemShoppingCart>
            </StyledShoppingCartMiniProductsTable>
            <StyledShoppingTotal>
                <StyledContainerPTotalShoppingCart>
                    <StyledP>TOTAL</StyledP>
                </StyledContainerPTotalShoppingCart>
                <StyledContainerPTotalShoppingCart>
                    <StyledP>$1.800.000</StyledP>
                </StyledContainerPTotalShoppingCart>
            </StyledShoppingTotal>
        </StyledSectionShoppingCart>
    )
}
