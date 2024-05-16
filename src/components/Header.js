import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <Box sx={{fontSize:"1.5rem"}}>
               EmoVoice
          </Box>
          <Box sx={{display:"flex", gap:"1.25rem", alignItems:"center"}}>
              Mental Health matters
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header