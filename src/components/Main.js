import React, { useState } from 'react'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Banner from './Banner'
import GetStarted from './GetStarted'
import Result from './Result'
import Action from './Info'

const TextBox = styled(Box)({
    fontFamily:"Poppins"
})

const Main = () => {

  const [emotion,setEmotion]=useState("");
  const [apiCalling,setApiCalling]=useState(false);

  return (
    <Box sx={{width:"100%"}}>
        <Box sx={{width:"100%"}}>
             <Banner/>
             <GetStarted setEmotion={setEmotion} setApiCalling={setApiCalling} apiCalling={apiCalling}/>
             <Result emotion={emotion} apiCalling={apiCalling}/>
             <Action/>
        </Box>
    </Box>
  )
}

export default Main