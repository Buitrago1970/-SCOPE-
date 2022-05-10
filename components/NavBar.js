import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
/* background-color: orange; */
grid-area: NavBar;
width:100%;
writing-mode: vertical-rl;
font-family: 'Cinzel', serif;
font-weight: 700;
font-size: 15px;
display:flex;
color: #2C2606;
`
const StyledUp = styled.div`
background: #F04F23;
height:70%;
width:100%;

.links{
    display:flex;
    width:100%;
    align-items:center;
}
`

const StyledLink = styled.a`
cursor:pointer;
margin: 5px 0;
padding:20px 0px;
width:90%;
display:flex;
align-items:center;
justify-content:center;
border:  ${({selected}) => selected ? '1px solid #2C2606' : '0px solid #2C2606'};
`
const StyledBtn = styled.div`
display:flex;
background: #EE218A;
height:30%;
justify-content:flex-end;
.by{
    font-size: 12px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:50px;
}
.year{
    font-size: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:5px;
}
`
export default function NavBar() {
    return (
        <StyledNavBar>
            <StyledUp>
                <div className='links'>
                    <StyledLink>INICIO</StyledLink>
                    <StyledLink selected='true'>CONTACTO</StyledLink>
                    <StyledLink>CARRITO</StyledLink>
                </div>
            </StyledUp>
            <StyledBtn>
                <h4 className='by'>{`design & developed by 
oficialmente512.com`}</h4>
                <h3 className='year'>©2022</h3>
            </StyledBtn>
        </StyledNavBar>
    )
}
