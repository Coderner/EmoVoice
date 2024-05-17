import React from 'react'
import { Box } from '@mui/material'
import styled from "@emotion/styled"
import Header from './Header'
import Banner from './Banner'
import GetStarted from './GetStarted'

const TextBox = styled(Box)({
    fontFamily:"Poppins"
})

const Main = () => {
  return (
    <Box sx={{width:"100%"}}>
        {/* <Header/> */}
        <Box sx={{width:"100%"}}>
             <Banner/>
             <GetStarted/>
        </Box>
    </Box>
  )
}

export default Main