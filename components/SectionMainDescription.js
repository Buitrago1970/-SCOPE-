import React from 'react'
import styled from 'styled-components'

import { device } from '../device/device';

const StyledSectionMainDescription = styled.div`
    background-color: #7A79A5;
    grid-area: SectionMainDescription; 
    color: #D5C4BA;
    height: 100vh;
        @media ${device.tablet} { 
            height: 45rem;
            }
`
// header
const StyledContainerHeaderMainDescription = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 10px;
font-size: 10px;
`
const StyledContainerTextHeaderMainDescription = styled.div`
`
const StyledContainerPrincipalTextMainDescription = styled.div`
text-align: center;
margin-bottom: 40px;
@media ${device.mobileL} { 
    margin-bottom: 25px;
            }
`

const StyledContainerTextsMainDescription = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledContainerTextAttributes = styled.div`
    width: 50%;
    border: 1px solid;
`
const StyledTextAttributes = styled.div`
    padding-left: 20px;
    font-size: 15px;
    @media ${device.mobileL} { 
        font-size: 13px;
    padding-left: 5px;

        }
`
const StyledContainerDescriptioTextMainDescription = styled.div`
    text-align: center;
    font-size: 30px;
    max-height: 29vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
`
const StyledContainerTextsAttributes = styled.div`
    border-bottom: 1px solid;
    @media ${device.mobileL} { 
        padding: 5px 0;
            }
`
const StyledPrincipalText = styled.h1`
    font-size: 60px;
    margin: 0;
    @media ${device.mobileL} { 
    font-size: 45px;
            }
`
const StyledHeaderP = styled.p`
    margin: 0;  
`

export default function SectionMainDescription() {
    return (
        <StyledSectionMainDescription>
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
            <StyledContainerPrincipalTextMainDescription>
                <StyledPrincipalText>SCOPE ©</StyledPrincipalText>
                <StyledPrincipalText>Chill</StyledPrincipalText>
                <StyledPrincipalText>Overage</StyledPrincipalText>
                <StyledPrincipalText>Production</StyledPrincipalText>
                <StyledPrincipalText>Engagment</StyledPrincipalText>

            </StyledContainerPrincipalTextMainDescription>
            <StyledContainerTextsMainDescription>
                <StyledContainerTextAttributes>
                    <StyledContainerTextsAttributes>
                        <StyledTextAttributes>SCOPE</StyledTextAttributes>
                        <StyledTextAttributes>PHYSICAL EVENT</StyledTextAttributes>
                    </StyledContainerTextsAttributes>
                    <StyledContainerTextsAttributes>
                        <StyledTextAttributes>AVERAGE SCOPE</StyledTextAttributes>
                        <StyledTextAttributes>$150’000</StyledTextAttributes>
                    </StyledContainerTextsAttributes>
                    <StyledContainerTextsAttributes>
                        <StyledTextAttributes>SOCIAL ENGAGEMENTS</StyledTextAttributes>
                        <StyledTextAttributes>7,000</StyledTextAttributes>
                    </StyledContainerTextsAttributes>
                </StyledContainerTextAttributes>
                <StyledContainerTextAttributes>
                </StyledContainerTextAttributes>
            </StyledContainerTextsMainDescription>
            <StyledContainerDescriptioTextMainDescription>
                Amorphous is a rising DJ that blew up overnight after going viral time and time again for this incredible mixes, juxtaposing the old school with the new. Hillman Grad Productions teamed up with us to create a unique experience for this incredible mixes, juxtaposing the old school with the new. Hillman Grad Productions teamed up with us to create a unique experience
            </StyledContainerDescriptioTextMainDescription>

        </StyledSectionMainDescription>
    )
}
