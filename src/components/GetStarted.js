import React from 'react'
import { Box, Button } from '@mui/material'
import styled from "@emotion/styled"
import Recorder from './Recorder'

const TextBox = styled(Box)({
    fontFamily:"Poppins",
})

const GetStarted = () => {
  return (
    <Box sx={{
              display:"flex", 
              flexDirection:"column",
              alignItems:"center",
              padding:"3.5rem 8rem",
            }}>
             <TextBox sx={{fontSize:"2rem", fontWeight:"500",  marginBottom:"1rem"}}>
                Start Recording Now
             </TextBox>
             {/* <TextBox sx={{fontSize:"1rem", marginBottom:"0.5rem"}}>No clue what to record? We got you!</TextBox>
             <Button sx={{
                backgroundColor:"#ed8717",
                color:"white",
                borderRadius:"34px",
                padding:"0.75rem 1.125rem",
                textTransform:"none",
                fontFamily:"Poppins",
                fontWeight:"500"
             }}>
                Get a Random Quote
             </Button> */}
            <Recorder/>
    </Box>
  )
}

export default GetStarted