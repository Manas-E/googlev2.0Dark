import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

function PaginationButtons() {
    const router= useRouter();
    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="flex lg:pl-52  sm:pl-[5%] md:pl-[14%] pt-5 mb-10">
            {startIndex >=10 &&
             <div className="mr-auto text-blue-800 font-medium hover:underline">
                
                <Link  href={`/search?term=${router.query.term}&start=${startIndex -10}`}>

                <div>
                    
                <ChevronLeftIcon className="h-7"/>
                <p>Previous</p>
               
                </div>
                </Link>

                

            </div>
            }
            <div className="mr-auto text-blue-800 font-medium hover:underline">
                <Link  href={`/search?term=${router.query.term}&start=${startIndex +10}`}>
                <div>
                
                <ChevronRightIcon className="h-7"/>
                <p>Next</p>
                
                </div>
                </Link>

          </div>

        </div>
    )
}

export default PaginationButtons
