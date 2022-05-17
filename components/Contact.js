import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// import imgPrueba from '../../public/productos/cap.png'

const StyledSectionContact = styled.div`
    grid-area: SectionShopProducts; 
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    color: #FFFFFF;
    display: flex;
    align-items: center;
`
const StyledContactCard = styled.div`
 display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 15px 0px; 
  background-color: #000000c4;
  border :2px solid white;
  width: 500px;
  padding: 15px;
  margin: auto;
  border-radius: 4px;
  font-size: 14px;
`
const StyledContactHeader = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  .phone-number-contact{
    /* display: flex; */
  }
  p{
      margin: 0;
    }
    .slogan-contact{
      font-size: 9px;
      text-align: end;
      display: flex;
      justify-content: end;
      p{
        max-width: 100px;
      }
    }
`
const StyledContactmain = styled.div`
    text-align: center;
    h1{
      margin: 0;
      font-size: 50px;
    }
    p{
      margin: 0;
    }
   
`
const StyledContactFooter = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: end;
p{
      margin: 0;
    }
    .email-contact{
      text-align: end;
    }
`

export default function Contact() {
  return (
    <StyledSectionContact>
      <StyledContactCard>
        <StyledContactHeader>
          <div className='phone-number-contact'>
            <p>+57 311 567 891</p>
            <p>+57 311 321 456</p>
          </div>
          <div className='slogan-contact'>
            <p>NO somos los unicos PERO SI los MEJORES</p>
          </div>
        </StyledContactHeader>
        <StyledContactmain>
          <h1>SCOPE</h1>
          <p>www.scope.com.co</p>
        </StyledContactmain>
        <StyledContactFooter>
          <div className='instagram'>
            <div className='img-in-container'>
              {/* img */}
            </div>
            <p>@scope:)</p>
          </div>
          <div className='email-contact'>
            <p>contacto@scope.com</p>
          </div>
        </StyledContactFooter>
      </StyledContactCard>
    </StyledSectionContact>
  )
}
