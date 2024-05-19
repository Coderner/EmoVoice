import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import styled from "@emotion/styled"
import axios from 'axios'
import { AudioRecorder } from 'react-audio-voice-recorder';

const addAudioElement = async(blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  console.log(url);
  audio.controls = true;
  document.body.appendChild(audio);
  console.log({ audio: blob });
  try {
    const emotionResponse = await checkEmotion({ audio: blob });
    console.log("Emotion Analysis Result:", emotionResponse);
  } catch (error) {
    console.error("Error during emotion analysis:", error);
  }
};

const checkEmotion = async({audio}) =>{
  try {
      const formData = new FormData();
      formData.append('audio', audio);

      const res = await axios.request({
          method: 'POST',
          url: 'https://audio-emotion.onrender.com/predict-emotion',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      });
      return res;
  } catch (error) {
      console.error(error);
  }
}

const TextBox = styled(Box)({
    fontFamily:"Poppins",
})

const GetStarted = () => {

    const [quote,setQuote] = useState("");

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
              onRecordingComplete={addAudioElement}
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
              }} 
              downloadOnSavePress={true}
              downloadFileExtension="webm"
              // mimeType="audio/wav"
            />
    </Box>
  )
}

export default GetStarted