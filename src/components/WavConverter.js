// import React from "react";
// import { downloadWav } from "webm-to-wav-converter";
// import axios from "axios";

// export default function Recorder() {
//   const mediaRecorder = React.useRef(null);
//   const stream = React.useRef(null);

//   const record = async () => {
//     if (!(mediaRecorder.current && stream.current)) {
//       const constraints = { audio: true, video: false };

//       try {
//         stream.current = await navigator.mediaDevices.getUserMedia(constraints);

//         mediaRecorder.current = new MediaRecorder(stream.current);

//         mediaRecorder.current.ondataavailable = (e) => {
//           if (mediaRecorder.current) {
//             // console.log(e.data);
//             checkEmotion(e.data);
//             downloadWav([e.data], false);
//           }
//         };
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     mediaRecorder.current.start();
//   };

//   const checkEmotion = async({audio}) =>{
//     try {
//         const formData = new FormData();
//         formData.append('audio', audio);
  
//         const res = await axios.request({
//             method: 'POST',
//             url: 'https://audio-emotion.onrender.com/predict-emotion',
//             data: formData,
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//         });
//         return res;
//     } catch (error) {
//         console.error(error);
//     }
//   }

//   const stop = () => {
//     mediaRecorder.current.stop();
//     mediaRecorder.current.onstop = () => {
//       const tracks = stream.current.getTracks();
//       tracks.forEach((track) => track.stop());
//       stream.current = null;
//       mediaRecorder.current = null;
//     };
//   };
  
//   return (
//     <div className="App">
//       <button onClick={record}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   );
// }