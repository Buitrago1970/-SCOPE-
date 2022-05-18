import React from 'react'

import styled from 'styled-components'

// principal container
const StyledSectionRegisterForm = styled.div`
background-color: black;
color: #FFFFFF;
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
const StyledHeaderP = styled.p`
    margin: 0;
`
// main
const StyledContainerLogin = styled.div`
   height: 70vh;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr;
    gap: 0px 0px;
    grid-template-areas:
        "title"
        "form";
    justify-items: center;
    align-items: start;
    .form-register{
    grid-area: form;
    margin-top: 60px;
        font-family: 'Inter', sans-serif;
        }
        .input-form-register{
            background-color: #dedede45;
            border: 1px solid #ffffff;
            width: 350px;
            height: 30px;
            color: #ffffff;
            padding-left: 5px;
            font-weight: 600;
        }
        .input-form-register:focus{
            box-shadow: 1px 0px 9px 1px #ffffff;
            outline: none;
        }
        p{
            margin-bottom:10px;
            font-weight: 500;
            font-size: 14px;
        }
        .container-text-bottom-login{
    font-size: 12px;
    display: flex;
    font-family: arial;
    height: 49px;
    margin-bottom: -37px;
    z-index: 0;
    zoom: 1;

    .link-login{
  text-decoration: none;
  color: #0085FF;
  padding-left: 4px;
  cursor: pointer;
 }}
 `
const StyledContainerLoginBtnTitle = styled.div`
    grid-area: title;
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledContainerPhoneInput = styled.div`
    label{
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 0.7fr 2.3fr; 
        grid-template-rows: 1fr 1fr; 
        grid-template-areas: 
            ". text-input"
            "number-country input-phone"
    }
    .text-input { grid-area: text-input; }
    .number-country { grid-area: number-country;
        min-width: 70px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 32px;
        background-color: #dedede45;
            border: 1px solid #ffffff;
            p{
                margin: 0;
            }
    }
    .input-phone { 
        grid-area: input-phone; 
        }
`
const StyledContainerFooterFormRegister = styled.div`

display: flex;
    justify-content: space-between;
    margin-top: 75px;
    button{
        background: transparent;
        border: 1px solid white;
        width: 170px;
        color: #FFFF;
        height: 35px;
    }

`

export default function SectionLogin() {
    return (
        <StyledSectionRegisterForm>
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
                    <h1>Iniciando sesión</h1>

                </StyledContainerLoginBtnTitle>
                <form className='form-register'>
                    <StyledContainerPhoneInput>
                        <label>
                            <p className='text-input'>
                                Tu número de celular
                            </p>
                            <div className='number-country'>
                                <div className='conatiner-icon-phone'>
                                    {/* <Image src={colombia} alt='Logo' /> */}
                                    🇨🇴
                                </div>
                                <p>+57</p>
                            </div>
                            <div className='input-phone'>
                                <input className="input-form-register" type="tel" name="phone" placeholder='311 ...'></input>
                            </div>
                        </label>
                        <p>Te Enviaremos Un Código Para Confirmarlo</p>

                    </StyledContainerPhoneInput>
                    <StyledContainerFooterFormRegister>

                        <div className="container-text-bottom-login">
                            <p>Ya tienes cuenta?</p>
                            <p className="link-login">iniciar sesíon</p>
                        </div>
                        <div className="container-buttons">
                            <button type="submit">
                                →
                            </button>
                        </div>
                    </StyledContainerFooterFormRegister>
                </form>



            </StyledContainerLogin>
        </StyledSectionRegisterForm>
    )
}
