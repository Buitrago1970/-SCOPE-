import React from 'react'

import styled from 'styled-components'

const StyledSectionLoginComponent = styled.div`
    background-color: black;
    color: #FFFFFF;
    grid-area: Login; 
    height: 100%;
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
// main
const StyledContainerLogin = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
`
const StyledContainerLoginBtnTitle = styled.div`
margin: 45px;
display: flex;
flex-direction: column;

.btn-login{
    margin: 15px;
    background-color: transparent;
    color: #ffffff;
    height: 50px;
    width: 300px;
    font-size: 30px;
    border: 0.5px solid #FFFFFF;
    font-family: cooper-black-std, serif;
    text-shadow: 0 0 10px rgb(255 255 255);
    border-radius: 4px;
}
.btn-login:hover{
    text-shadow: 0 0 15px rgb(255 255 255);
    transition: all 0.2s ease-in;
    background-color: #201f1f9e;
}
`

export default function login() {
    return (
        <StyledSectionLoginComponent>
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
            <StyledContainerLogin>
                <StyledContainerLoginBtnTitle>
                    <h1>Hola,Identificate</h1>
                </StyledContainerLoginBtnTitle>
                <StyledContainerLoginBtnTitle>
                    <button className='btn-login'>
                        Iniciar sesión
                    </button>
                    <button className='btn-login'>
                        Crear cuenta
                    </button>

                </StyledContainerLoginBtnTitle>
            </StyledContainerLogin>


        </StyledSectionLoginComponent>
    )
}
