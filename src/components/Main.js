import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Header from './Header'
import Banner from './Banner'
import GetStarted from './GetStarted'
import Result from './Result'
import Action from './Info'
import WavRecorder from './WavConverter'
import axios from 'axios'

const TextBox = styled(Box)({
    fontFamily:"Poppins"
})

const Main = () => {

  // useEffect(()=>{
  //   checkEmotion("hello");
  // },[]);

  return (
    <Box sx={{width:"100%"}}>
        {/* <Header/> */}
        <Box sx={{width:"100%"}}>
             <Banner/>
             <GetStarted/>
             <Result/>
             <Action/>
             {/* <WavRecorder/> */}
        </Box>
    </Box>
  )
}

export default Main