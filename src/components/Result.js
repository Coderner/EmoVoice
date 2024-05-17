import React from 'react'
import { Box } from '@mui/material'
import styled from "@emotion/styled"

const TextBox = styled(Box)({
  fontFamily:"Poppins",
})

const Result = () => {
  return (
    <Box sx={{
      display:"flex", 
      flexDirection:"column",
      alignItems:"center",
      marginBottom:"10rem"
    }}>
      <Box sx={{width:"80%",
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '16px',
                backgroundColor: '#f5f7fb', 
                borderRadius: '8px', 
                display:"flex", 
                flexDirection:"column",
                alignItems:"center"
              }}>
         <TextBox sx={{fontSize:"2rem", fontWeight:"500",  marginBottom:"1rem"}}>
                Result
         </TextBox>
         <TextBox sx={{fontSize:"1.5rem", fontWeight:"500", marginBottom:"1rem"}}>
                Happy!
         </TextBox>
         <TextBox>Good to see you in good mood!</TextBox>
      </Box>
    </Box>
  )
}

export default Result