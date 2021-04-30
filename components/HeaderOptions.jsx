import React from 'react'
import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'

function HeaderOptions() {
    return (
        <div className="flex w-full justify-evenly text-gray-100 text-sm lg:text-base lg:justify-start lg:space-x-48 lg:pl-52 border-b-[1px]"> 
            <div  className="flex space-x-4     ">
            {/* left */}

            <HeaderOption Icon={SearchIcon} title="All" selected={true}/>
            <HeaderOption Icon={PhotographIcon} title="Images" />
            <HeaderOption Icon={NewspaperIcon} title="News" />
            <HeaderOption Icon={MapIcon} title="Maps" />
            <HeaderOption Icon={PlayIcon} title="Videos" />
            <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            </div>
            {/* right */}
            <div className="flex space-x-4">
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>            
            </div>
        </div>
    )
}

export default HeaderOptions
