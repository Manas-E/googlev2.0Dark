import React, { useState } from 'react'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import useTimeout from "@rooks/use-timeout"
import Dictaphone from "./Dictaphone"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import router from 'next/router'

      <script src="./speechRecognition.js"></script>
  
function VoiceSearch({setvoiceState}) {

    const [voiceinput,setvoiceinput] = useState("Start")
    const [isListening,setListening]= useState(false)



    const search =(e)=>{
      console.log("==>",e);
      if(!e) return;
  
      router.push(`/search?term=${e}`);
  
    }
  


      if ("webkitSpeechRecognition" in window) {
      // new speech recognition object
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
            
      // This runs when the speech recognition service starts
      recognition.onstart = function() {
      console.log("We are listening. Try speaking into the microphone.");
      setListening(true)
      setvoiceinput("Listening...")
      };

    recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
    setListening(false)
    setvoiceinput("Start")

    }
              
// This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;

    setvoiceinput(transcript)
    search(transcript)
   
    };
    
    recognition.onerror = (err)=>{
      alert(err.error)
    }
      
     
      } else {
        console.log("Speech Recognition Not Available")
      }
    return (
        <div className="flex  absolute top-0 left-0 right-0 bottom-0  z-1000 items-center h-screen w-screen  bg-white ">
            <div className="absolute top-0 bg-gradient-to-b from-blue-500 to-white w-full h-14">  </div>
            <XIcon onClick={()=>setvoiceState(false)} className=" absolute cursor-pointer  w-5 h-5  top-5 right-5 "/>
            <div className="grid-container grid grid-cols-2  items-center justify-center w-screen  ">

            <h1 className="text-4xl ml-20 pl-20 ">{voiceinput}</h1>
            <div className="bg-white w-52 h-52 rounded-full shadow-md ml-20 flex  items-center justify-center">
            <MicrophoneIcon onClick={()=>isListening? setvoiceinput("Wait...") : recognition.start()} className={`w-24 h-30 ${ isListening ? "text-red-500" : "text-gray-400" }  bg-white  align-self-center item-center	border-black  rounded-full`}/>

            </div>

            </div>
        </div>
    )
}

export default VoiceSearch
