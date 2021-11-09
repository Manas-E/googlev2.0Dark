import Head from 'next/head'
import Avatar from "../components/Avatar"
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/outline'
import Image from "next/image"
import Footer from '../components/Footer'
import {useRouter} from 'next/router'
import { useRef, useState } from 'react'

import {signIn,signOut,useSession} from "next-auth/client"
import VoiceSearch from "../components/VoiceSearch"


export default function Home() {


 const router = useRouter();
 const searchInputref = useRef(null);
 const session = useSession();
 const [voicestate,setvoiceState] = useState(false)

  const search =(e)=>{
    e.preventDefault();
    const term= searchInputref.current.value;
    console.log("==>",term);
    if(!term) return;
 
    router.push(`/search?term=${term}`);

  }



  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900' >
      <Head>
      <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      {/* head */}
      <header className='flex w-full justify-between p-5  text-gray-100 font-medium'>

        {/* left header */}
        <div className='flex space-x-4 items-center '>
         <a  href="https://en.wikipedia.org/wiki/Google"> <p className='link'>About</p> </a>
        <a href="https://store.google.com/in/">  <p  className='link'>Store</p> </a>
        </div>

        {/* right header */}
        <div  className='flex space-x-4 items-center '>
        <a href="https://mail.google.com/">   <p  className='link'>Gmail</p>   </a>
        <p onClick={()=>console.log(session)  }  className='link'>Images</p>

          {/* icon*/}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 rounded-full hover:bg-gray-700 cursor-pointer " viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg> 

          {/* avatar */}
          <div onClick={  session[0] != null ?  signOut : signIn  }>
          < Avatar  url={  session[0]?.user?.image ?  session[0]?.user?.image:  "data:image/png;base64,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"} />         
          </div>

        </div>

        </header>

      {/* body */}

        <form className="flex flex-col mt-0 flex-grow  items-center h-screen">
        <Image className='mb-0' src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c51f.png'
        height= {200}
        width={600}                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            />

        <div className="flex w-full  hover:shadow-lg focus-within:shadow-lg 
         border border-gray-200 rounded-full px-5 py-3 items-center" > 
        <SearchIcon aria-label="Search by Voice" className='h-5 mr-3 text-gray-500' />
        <input  ref={searchInputref} type='text' className='focus:outline-none flex-grow bg-gray-900 text-gray-100'/>
        <MicrophoneIcon onClick={()=>setvoiceState(!voicestate)} className='h-5 cursor-pointer text-gray-100' />
        {voicestate &&  <VoiceSearch setvoiceState={setvoiceState} className="absolute z-1000     items-stretch h-screen w-screen  flex  bg-white " />}
       

        </div>

        <div className="flex flex-col justify-center  sm:flex-row"> 

        <button  onClick={search}  className="btn" >Google Search</button> 
        <button  formAction= 'https://www.google.com/doodles'   className="btn">I'm feeling lucky</button> 
         
        </div>
        </form>
      






      {/* footer */}
     
          <Footer className='flex-grow'> </Footer>
      
    </div>
  )
}
