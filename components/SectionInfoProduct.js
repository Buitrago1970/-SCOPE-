import React from 'react'

import styled from 'styled-components'
import Image from 'next/image'
import tshirt from '../public/productos/jacket.png'
import { device } from '../device/device';



const StyledSectionMainDescriptionProduct = styled.div`
    background-color: black;
    color: #FFFFFF;
    grid-area: SectionMainDescription; 
    font-family: 'Cinzel', serif;
    height: 100vh;
`
// header
const StyledContainerHeaderMainDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 10px;
    font-size: 10px;
    font-family: cooper-black-std, serif;
`
const StyledContainerTextHeaderMainDescription = styled.div`
`
const StyledHeaderP = styled.p`
    margin: 0;
`
// section main
const StyledcontainerSectionMainProduct = styled.div`
    border: 1px solid #D5C4BA;
    `
const StyledContainerInfoTextProductName = styled.div`
    display: grid; 
    grid-template-columns: 0.4fr 2.0fr 0.4fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "limited-edition name QuienSabe";
        padding: 10px;
        padding-bottom: 0;

`
const StyledContainerNameProduct = styled.div`
    text-align: center;
    grid-area: name;
    font-family: cooper-black-std, serif;
    @media ${device.mobileL} { 
        h1{
            margin: 2px;
            font-size: 20px;
        }
      }
`
const StyledContainerLimitedEdition = styled.div`
    grid-area: limited-edition;
    font-size: 11px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 60px;
    @media ${device.mobileL} { 
        font-size: 8px;
    }
`
const StyledLimitedEditionP = styled.p`
    margin: 0;
    color: #E1D9CE;
`
const StyledLimitedEditionNumberP = styled.p`
    margin: 0;
    color: #FF0000;
`
// images
const StyledContainerImagesProduct = styled.div`
     width: 100%;
     margin: auto;
     overflow-y: scroll;
    scroll-behavior: smooth;
    max-height: 25rem;
 `
const StyledContainerImage = styled.div`
    width: 100%;
    margin: auto;
    border-bottom: 1px solid #D5C4BA;
 `
// info - descriptio - product
const StyledContainerSectionInfoProduct = styled.div`
    border: 1px solid #D5C4BA;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1.2fr 0.8fr; 
    grid-template-areas: 
        "colorSize details"
        "PribeBuy details"; 
    height: 29vh;
    overflow-x: hidden;
    overflow-y: auto;
        @media ${device.tablet} { 
            grid-auto-columns: 1fr; 
            grid-template-columns: 1fr 1fr; 
            grid-template-rows: 1fr 1fr; 
            grid-template-areas: 
                "colorSize details"
                "PribeBuy PribeBuy"; 
      }
      @media ${device.mobileL} { 
        grid-auto-columns: 1fr; 
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        grid-template-areas: 
            "colorSize"
            "details"
            "PribeBuy"; 
      }


`
const StyledContainerColorSize = styled.div`
    grid-area: colorSize;
    padding: 15px;
    border-right: 1px solid #D5C4BA;
    height: 12rem;
    padding-top: 0;
    @media ${device.mobileL} { 
        border-right: 1px solid #D5C4BA;
        border-bottom: 1px solid #D5C4BA;
        border-left: 1px solid #D5C4BA; 
      }
`
const StyledContainerPriceBuy = styled.div`
    grid-area: PribeBuy;
    border-top: 1px solid #D5C4BA;
    border-right: 1px solid #D5C4BA;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    height: 7rem;
    h3{
        margin-bottom: 15px;
    }
    @media ${device.mobileL} { 
        border-bottom: 1px solid #D5C4BA;
        border-left: 1px solid #D5C4BA; 
      }
`
const StyledContainerDetails = styled.div`
    grid-area: details;
    padding: 15px;
    text-align: center;
    padding-top: 0;
    h3{
        margin: 20px 0!important;
        font-size: 17px;
    }
    @media ${device.mobileL} { 
        border-right: 1px solid #D5C4BA;
        border-left: 1px solid #D5C4BA; 
      }
`
const StyledDetail = styled.div`
    font-size: 12px;
    text-align: initial;
    font-family: Arial, Helvetica, sans-serif;
`
const StyledBtnBuy = styled.button`
    background: none;
    color: #FFFFFF;
    border: 1px solid #D5C4BA;
    width: 200px;
    height: 40px;
    font-size: 15px;
    cursor: pointer;
    :hover{
    transition: all 0.2s ease-in;
    border: 2px solid #FFFFFF;
    filter: drop-shadow(rgb(255, 255, 255) 0 0 1px);
    }
`
// select color size
const StyledContainerSelectSize = styled.div`
    margin: 20px 0;
    select{
        background: none;
        color: white;
        width: 100%;
        height: 30px;
        margin: 15px 0;
        border: 2px solid #e9dcce;
        border-radius: 0;
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        display:inline-block;
    }
    option:focus{
        outline: none;

    } 
    h3{
        margin-bottom: 15px;
        font-size: 17px;
    }
`
const StyledContainerSelectColor = styled.div`
    display: flex;
p{
    display: inline-block;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 7.5rem;
    margin-right: 15px;
    margin-bottom: 5px;
    }
`
const StyledContainerColors = styled.div`
    display: flex;
`
const StyledColor = styled.div`
    content: '????????????';
    cursor: pointer;
    color: transparent;
    border-radius: 50px;
    margin-right: 1rem;
    width: 35px;
    height: 35px;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  `
const StyledPSelectColor = styled.p`
    margin-right: 1rem;
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1rem;
`
export default function SectionInfoProduct() {
    return (
        <StyledSectionMainDescriptionProduct >
            <StyledContainerHeaderMainDescription>
                <StyledContainerTextHeaderMainDescription>
                    <StyledHeaderP>A VERY GOOD</StyledHeaderP>
                    <StyledHeaderP>JOB xxx 2022</StyledHeaderP>
                </StyledContainerTextHeaderMainDescription>
                <StyledContainerTextHeaderMainDescription>
                    <StyledHeaderP>WEDNESDEY</StyledHeaderP>
                    <StyledHeaderP>{`(CO)`}</StyledHeaderP>
                </StyledContainerTextHeaderMainDescription>
                <StyledContainerTextHeaderMainDescription>
                    <StyledHeaderP>03:32:12 </StyledHeaderP>
                    <StyledHeaderP>AM</StyledHeaderP>
                </StyledContainerTextHeaderMainDescription>
            </StyledContainerHeaderMainDescription>
            <StyledcontainerSectionMainProduct>
                <StyledContainerInfoTextProductName>
                    <StyledContainerLimitedEdition>
                        <StyledLimitedEditionP>Edicion Limitada</StyledLimitedEditionP>
                        <StyledLimitedEditionNumberP>2/10</StyledLimitedEditionNumberP>
                    </StyledContainerLimitedEdition>
                    <StyledContainerNameProduct>
                        <h1>SCOPE T-SHIRT</h1>
                    </StyledContainerNameProduct>
                </StyledContainerInfoTextProductName>
                <StyledContainerImagesProduct>
                    <StyledContainerImage>
                        <Image src={tshirt} alt='Logo' />
                    </StyledContainerImage>
                    <StyledContainerImage>
                        <Image src={tshirt} alt='Logo' />
                    </StyledContainerImage>
                    <StyledContainerImage>
                        <Image src={tshirt} alt='Logo' />
                    </StyledContainerImage>
                    <StyledContainerImage>
                        <Image src={tshirt} alt='Logo' />
                    </StyledContainerImage>
                    <StyledContainerImage>
                        <Image src={tshirt} alt='Logo' />
                    </StyledContainerImage>
                    <StyledContainerImage>
                        <Image src={tshirt} alt='Logo' />
                    </StyledContainerImage>
                </StyledContainerImagesProduct>
            </StyledcontainerSectionMainProduct>
            <StyledContainerSectionInfoProduct>
                <StyledContainerColorSize>
                    <StyledContainerSelectSize>
                        <h3>
                            CHOOSE SIZE (CO)
                        </h3>
                        <select name='color'>
                            <option value='red'>
                                Rojo
                            </option>
                            <option value='green'>
                                Verde
                            </option>
                            <option>
                                Gris
                            </option>
                        </select>
                    </StyledContainerSelectSize>
                    <StyledContainerSelectColor>
                        <StyledPSelectColor>COLOR</StyledPSelectColor>
                        <p>Blanco</p>
                    </StyledContainerSelectColor>
                    <StyledContainerColors>
                        <StyledColor onClick={() => alert('Click :) ')} />
                        <StyledColor onClick={() => alert('Click :) ')} />
                        <StyledColor onClick={() => alert('Click :) ')} />
                        <StyledColor onClick={() => alert('Click :) ')} />

                    </StyledContainerColors>
                </StyledContainerColorSize>
                <StyledContainerPriceBuy>
                    <h3>
                        $1ooo.ooo.oo
                    </h3>
                    <StyledBtnBuy onClick={() => alert('Click :) ')}>
                        BUY
                    </StyledBtnBuy>
                </StyledContainerPriceBuy>
                <StyledContainerDetails>
                    <h3>
                        PRODUCT DETAILS
                    </h3>

                    <StyledDetail>
                        ??? Full destroyed cotton and rubber<br />??? Sneaker<br />??? Rippings allover the fabr/ic<br />??? Balenciaga logo printed at the edge of the toe<br />??? Balenciaga graffiti logo in color contrast on sole <br />??? Embossed size at back<br />??? 8 eyelets lace-up vamp<br />??? Vulcanized sole<br />??? Made in China<br />??? Wipe with a soft cloth
                    </StyledDetail>
                </StyledContainerDetails>
            </StyledContainerSectionInfoProduct>
        </StyledSectionMainDescriptionProduct>
    )
}
