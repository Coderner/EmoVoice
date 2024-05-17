import React from 'react'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import MentalHealth from "../Images/mentalHealth.png"

const TextBox = styled(Box)({
  fontFamily:"Poppins",
})

const Info = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", marginBottom:"10rem"}}>
      <Box sx={{width:"80%",display:"flex", justifyContent:"space-between"}}>
            <Box 
                component="img"
                src={MentalHealth}
                sx={{width:"20rem", height:"20rem", borderRadius:"12px"}}
            />
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"2rem", width:"70%"}}>
                 <Box>
                    <TextBox sx={{fontWeight:500, fontSize:"1.5rem"}}>What is mental health?</TextBox>
                    <TextBox>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</TextBox>
                 </Box>
                 <Box>
                    <TextBox sx={{fontWeight:500, fontSize:"1.5rem"}}>Why is mental health important for overall health?</TextBox>
                    <TextBox>Mental and physical health are equally important components of overall health.  For example, depression increases the risk for many types of physical health problems, particularly long-lasting conditions like diabetes, heart disease, and stroke. Similarly, the presence of chronic conditions can increase the risk for mental illness.</TextBox>
                 </Box>
                 <Box>
                    <TextBox sx={{fontWeight:500, fontSize:"1.5rem"}}>Can your mental health change over time?</TextBox>
                    <TextBox>Yes, it’s important to remember that a person’s mental health can change over time, depending on many factors.  When the demands placed on a person exceed their resources and coping abilities, their mental health could be impacted. </TextBox>
                 </Box>
            </Box>
      </Box>
    </Box>
  )
}

export default Info