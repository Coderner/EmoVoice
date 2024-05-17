import React from 'react'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Voice from "../Images/VoiceIcon.svg"

const TextBox = styled(Box)({
    fontFamily:"Poppins",
    color:"white"
})

const Card = styled(Box)({
    fontFamily:"Poppins",
    borderRadius:"20px",
    padding:"1rem",
    flex:1,
    color:"white",
    border:"0.5px solid white",
    textAlign:"center"
})

const Banner = () => {
  return (
    <Box sx={{
        bgcolor:"#37626f",
        height:"30vh", 
        display:"flex", 
        justifyContent:"space-between",
        padding:"5rem 8rem",
        }}
    >
      <Box sx={{width:"60%"}}>
        <TextBox sx={{fontWeight:500,fontSize:"2.5rem"}}>
            EmoVoice
        </TextBox>
        <TextBox sx={{fontSize:"2rem"}}>
            Emotion Detection And Support
        </TextBox>
        <Box sx={{display:"flex",justifyContent:"space-between", gap:"2rem", marginTop:"2rem"}}>
             <Card>Record Your Voice</Card>
             <Card>Analyse Your Emotions</Card>
             <Card>Reach Out For Help</Card>
        </Box>
      </Box>
      <Box>
           <Box 
             component="img"
             src={Voice}
           />
      </Box>     
   </Box>
  )
}

export default Banner