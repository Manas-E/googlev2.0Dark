import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from './Header'
import PaginationButtons from './PaginationButtons'
import {res} from './res'
import SearchResults from './SearchResults'

function Search({results}) {

const router=useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>
            <Header />

            <SearchResults  results={results}/>
            <PaginationButtons/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
        const useDummyData=false;
        const startIndex = context.query.start || '0';
        const data= useDummyData?
        res
        : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
        .then(res=>{return res.json()})

        return {
            props:{
                results:data
            }
        }
    }
