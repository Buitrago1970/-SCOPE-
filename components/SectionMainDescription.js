import React from 'react'
import styled from 'styled-components'

const StyledSectionMainDescription = styled.div`
background-color: #7A79A5;
grid-area: SectionMainDescription; 
color: #D5C4BA;
height:100vh;
`
// header
const StyledContainerHeaderMainDescription = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 10px;
`
const StyledContainerTextHeaderMainDescription = styled.div`
`
const StyledContainerPrincipalTextMainDescription = styled.div`
text-align: center;
margin-bottom: 40px;
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
`
const StyledContainerDescriptioTextMainDescription = styled.div`
    text-align: center;
`
const StyledContainerTextsAttributes = styled.div`
    border-bottom: 1px solid;
`
const StyledPrincipalText = styled.h1`
    font-size: 70px;
    margin: 0;
`
const StyledHeaderP = styled.p`
    margin: 0;  
`
const StyledContainerDescriptioText = styled.div`
width:100%;
margin-top:25px;
`
const StyledTextDescriptionMain = styled.p`
font-size: 30px;
overflow-y: scroll;
    scroll-behavior: smooth;
    max-height: 8.5rem;
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
                <StyledContainerDescriptioText>
                    <StyledTextDescriptionMain>
                        Amorphous is a rising DJ that blew up overnight after going viral time and time again for this incredible mixes, juxtaposing the old school with the new. Hillman Grad Productions teamed up with us to create a unique experience for this incredible mixes, juxtaposing the old school with the new. Hillman Grad Productions teamed up with us to create a unique experience
                    </StyledTextDescriptionMain>
                </StyledContainerDescriptioText>
            </StyledContainerDescriptioTextMainDescription>

        </StyledSectionMainDescription>
    )
}
