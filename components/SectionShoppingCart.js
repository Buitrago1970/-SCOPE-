import React from 'react'
import styled from 'styled-components'

const StyledSectionShoppingCart = styled.div`
background-color: blue;
grid-area: SectionShoppingCart;
`
const StyledShoppingCartMiniHeader = styled.div`
border: 1px solid red;
display: flex ;
justify-content: space-between;
padding-right: 15px;
`
const StyledShoppingCartMiniNavBar = styled.div`
border: 1px solid gray;
`
const StyledShoppingCartMiniProductsTable = styled.div`
border: 1px solid black;
`
const StyledContainerDateShoppingCart = styled.div`
border: 1px solid white;
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
                <StyledContainerDateShoppingCart>
                    <StyledP>3 .2022</StyledP>
                </StyledContainerDateShoppingCart>
                <StyledP>{'<3'}</StyledP>
            </StyledShoppingCartMiniHeader>
            <StyledShoppingCartMiniNavBar>

            </StyledShoppingCartMiniNavBar>
            <StyledShoppingCartMiniProductsTable></StyledShoppingCartMiniProductsTable>

        </StyledSectionShoppingCart>
    )
}
