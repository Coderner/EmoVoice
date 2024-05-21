import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import styled from "@emotion/styled"
import axios from 'axios'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
axios.defaults.headers.common['Cross-Origin-Embedder-Policy'] = 'require-corp';
axios.defaults.headers.common['Cross-Origin-Opener-Policy'] = 'same-origin';

const TextBox = styled(Box)({
    fontFamily:"Poppins",
})

const GetStarted = ({setEmotion, setApiCalling, apiCalling}) => {
    const [quote,setQuote] = useState("");
    const [file,setFile] = useState(null);

    const handleFileChange = (e) =>{
      console.log(e);
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    }

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  const checkEmotion = async() =>{
    setApiCalling(true);
    let formData = new FormData();
    formData.append("audio", file);
    try {
        const res = await axios.request({
            method: 'POST',
            url: 'https://audio-emotion.onrender.com/predict-emotion',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res);
        setEmotion(res.data.emotion);
    } catch (error) {
        console.error(error);
    }
    setApiCalling(false);
  }

    const fetchQuote = async() =>{
        try {
            const response = await axios.request({
                method: 'GET',
                url: 'https://famous-quotes4.p.rapidapi.com/random',
                params: {
                  category: 'all',
                  count: '2'
                },
                headers: {
                  'X-RapidAPI-Key': '614622a6e9msh2c29292b3d7d365p1e88b8jsnd2041c66a4a9',
                  'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
                }
              });
            setQuote(response?.data[0]?.text);
        } catch (error) {
            console.error(error);
        }
  }

  return (
    <Box sx={{
              display:"flex", 
              flexDirection:"column",
              alignItems:"center",
              padding:"3.5rem 8rem",
              gap:"2rem"
            }}>
             <TextBox sx={{fontSize:"2rem", fontWeight:"500"}}>
                Start Recording Now
             </TextBox>
             <Box sx={{display:"flex", justifyContent:"space-between", gap:"2rem", alignItems:"center"}}>
             <TextBox sx={{fontSize:"1rem"}}>No clue what to record? We got you!</TextBox>
                    <Button sx={{
                        backgroundColor:"#ed8717",
                        color:"white",
                        borderRadius:"34px",
                        padding:"0.75rem",
                        textTransform:"none",
                        fontFamily:"Poppins",
                        fontWeight:"500"
                    }}
                    onClick={fetchQuote}
                    >
                        Get a Random Text
                    </Button>
             </Box>
             {quote?(
                 <TextBox sx={{
                    fontSize:"1rem",
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f5f7fb', 
                    borderRadius: '8px',
                    padding:"1rem"
                  }}>
                    "{quote}"
                  </TextBox>
             ):null}
             <AudioRecorder 
                onRecordingComplete={(blob) => addAudioElement(blob)}
                downloadOnSavePress
                recorderControls={recorderControls}
              />
              <input type="file" onChange={handleFileChange}/>
              <Button sx={{
                        backgroundColor:"#ed8717",
                        color:"white",
                        borderRadius:"34px",
                        padding:"0.75rem",
                        textTransform:"none",
                        fontFamily:"Poppins",
                        fontWeight:"500"
                      }} 
                       disabled={apiCalling}
                       onClick={checkEmotion}>
                        Check
              </Button>
    </Box>
  )
}

export default GetStarted