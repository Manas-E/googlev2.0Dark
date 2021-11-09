import React from 'react'
import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import router from 'next/router';

function HeaderOptions({e}) {

    const search =(e)=>{
        console.log("==>",e);
        if(!e) return;
    
        router.push(`/search?term=${e}&searchType=image`);
    
      }
    

    return (
        <div className="flex w-full justify-evenly text-gray-100 text-sm lg:text-base lg:justify-start lg:space-x-48 lg:pl-52 border-b-[1px]"> 
            <div  className="flex space-x-4     ">
            {/* left */}

            <HeaderOption Icon={SearchIcon} title="All" selected={true}/>
            <div onClick={()=>search(e)}>
                
            <HeaderOption  Icon={PhotographIcon} title="Images" />
            </div>

           </div>
            {/* right */}
       </div>
    )
}

export default HeaderOptions
