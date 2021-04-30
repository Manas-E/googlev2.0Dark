import React from 'react'

function SearchResults({results}) {
    console.log(results);
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
            <p className='text-gray-600 test-md mb-5 mt-3'>About {results?.searchInformation.formattedTotalResults}  results {results?.searchInformation.formattedSearchTime} seconds</p>
            

            {results?.items?.map((result)=>{
                return <div key={result.link} className="max-w-xl mb-5">
                    <div className="group">
                    
                        <a href={result.link} className='text-sml'>{result.formattedUrl}</a>
                        
                        <a href={result.link} className='truncate text-xl text-blue-800 font-medium group-hover:underline'><h2>{result.title}</h2></a>
                    
                    </div>

                    <p className="line-clamp-2">
                        {result.snippet}
                    </p>



                </div>
            })}




        </div>
    )
}

export default SearchResults
