import React from 'react'
import Image from "next/image"
function SearchResults({results}) {
    const searchType = results?.queries?.request[0]?.searchType;

    console.log(results,searchType);
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52  '>
            <p className='text-gray-600 test-md mb-5 mt-3'>About {results?.searchInformation?.formattedTotalResults}  results {results?.searchInformation?.formattedSearchTime} seconds</p>
            
       {searchType !== "image" ?
            results?.items?.map((result)=>{
                return <div key={result.link} className="max-w-xl mb-5">
                    <div className="group">
                    
                        <a href={result.link} className='text-sml'>{result.formattedUrl}</a>
                        
                        <a href={result.link} className='truncate text-xl text-blue-800 font-medium group-hover:underline'><h2>{result.title}</h2></a>
                    
                    </div>

                    <p className="line-clamp-2">
                        {result.snippet}
                    </p>



                </div>
            })  :
            <div className=" grid grid-cols-4 ">
            {results?.items?.map((result)=>{
                return <div key={result.link} className="    max-w-xl mb-5 ">
                    <div className=" group">
                     
                     <img src={result.image.thumbnailLink} loading="lazy" height="200px"  width={result.image.thumbnailWidth}  />
                        <a href={result.link} className='truncate text-sm  group-hover:underline'><h2>{result.title.substr(0,10) + "..."}</h2></a>
                        <a href={result.link} className='text-sm'>{result.displayLink}</a>
                       
                    </div>

                    <p className="line-clamp-2 text-sm ">
                        {result.snippet.substr(100)}
                    </p>



                </div>
            
            })}
            </div>
        }




        </div>
    )
}

export default SearchResults
