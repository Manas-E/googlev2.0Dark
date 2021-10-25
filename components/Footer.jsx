import { GlobeIcon } from '@heroicons/react/outline'
import React from 'react'

function Footer() {
    return (
        <footer className='grid w-full divide-y-[1px] divide-gray-300
         bg-gray-100 text-sm text-gray-500'>
            <div className='flex justify-center items-center'>
                <p>India</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4
            grid-flow-row-dense'>
                <div className='flex justify-center items-center
                md:col-span-2 lg:col-span-1 lg:col-start-2'>
                    <GlobeIcon className='h-5 mr-3 text-gray-500'></GlobeIcon>carbon neutral since 1999
                </div>

                <div className='flex justify-center space-x-8 whitespace-nowrap md:ml-auto'>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>
                
                <div className='flex justify-center space-x-8 whitespace-nowrap md:ml-auto'>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
                

            </div>

        </footer>
    )
}

export default Footer
