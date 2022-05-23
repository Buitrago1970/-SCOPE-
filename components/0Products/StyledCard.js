import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledProduct = styled.div`
 font-family: 'Cinzel', serif;
 font-family: 'Inter'; 
 border: 1px solid ${({ limited }) => limited ? '#1C1C1C' : '#E9DCCE'};
 background-color: ${({ limited }) => limited ? '#E9DCCE' : '#1C1C1C'};
 width: 240px;
 height: 280px;
 margin: 10px 5px;
 padding: 10px;
 .top{
   display:flex;
    justify-content: space-between;
   .limited-edition{
    display: ${({ limited }) => limited ? 'block' : 'none'};
    flex-direction:column;
    width:15%;
    justify-content:center;
    font-size: 8px;
    align-items: center;  
    .limited-edition-p{
      color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
    }
    .limited-edition-p-number{
      color: #FF0000;
    }
   }
 }
 .product-name{
   color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
   font-size: 15px;
 }`

const StyledImage = styled.div`
cursor:pointer;
display:flex;
  align-items:center;
   justify-content:center;
   margin:0 auto;
   `

const StyledCard = ({ id, limited, nombre, img }) => {
  return (
    <StyledProduct limited={limited} id={id} >
      <div className="top" >
        <h3 className="product-name">SCOPE {nombre}</h3>
        <div className="limited-edition" limited={limited}>
          <p className='limited-edition-p'>Limited Edition</p>
          <p className='limited-edition-p-number'>7/8</p>
        </div>

      </div>
      <Link href={'/InfoProducto'}>
        <StyledImage>
          <Image className="img" src={img} alt="" width={210} height={210} objectFit="cover" />
        </StyledImage>
      </Link>
    </StyledProduct>
  )
}

export default StyledCard