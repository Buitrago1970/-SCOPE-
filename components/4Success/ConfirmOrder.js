import React from 'react'
import styled from 'styled-components'


const StyledConfirmOrder = styled.div`
 background-color:black;
 color:#0DFF09;`
//top bar
const StyledTopBar = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 10px;
p{
    margin: 0;
}
`

const ConfirmOrder = () => {
  return (
    <StyledConfirmOrder>
        <StyledTopBar>
                <div className='container'>
                    <p>A VERY GOOD</p>
                    <p>JOB © 2022</p>
                </div>
                <div className='container'>
                    <p>WEDNESDEY</p>
                    <p>{`(CO)`}</p>
                </div>
                <div className='container'>
                    <p>03:32:12 </p>
                    <p>AM</p>
                </div>
            </StyledTopBar>
    </StyledConfirmOrder>
  )
}

export default ConfirmOrder