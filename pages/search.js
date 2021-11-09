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
            <Header e={router.query.term} />

            <SearchResults  results={results}/>

            <PaginationButtons/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
        const useDummyData=false;
        const startIndex = context.query.start || '0';

        const url =`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}&searchType=${context.query.searchType || "searchTypeUndefined"}`
        console.log(url)
     
        const data= useDummyData?
        res
        : await fetch(url)
        .then(res=>{return res.json()})



        return {
            props:{
                results:data
            }
        }
    }
