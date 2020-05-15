import React, { useState, useEffect } from 'react';
import { 
    BannerHolder, 
    ReposHolder,
    HomaPage,
    LoaderHolder 
} from './style';
import { fetcher, github_fetcher } from '../../helpers';
import {
    Input
} from '../../components'
import useSWR from 'swr'
import Repo from './repo';
import { createClient }  from 'contentful'
import * as sectionsHolder from './sectionHolder'
import Loader from 'react-loader-spinner'
import { theme } from '../../theme'

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.DELIVERY_TOKEN
})
const Home = () => {
    const { data, error } = useSWR('/users/zedlen/repos', github_fetcher) 
    let repos = <></>   
    if (error) {
        repos = <div>failed to load</div>
    }
    else {
        if (!data) {
            repos = <div>loading...</div>
        } 
        else {
            repos = 
                (   
                    <ReposHolder> 
                        {data.map(repo=>{
                            if (repo.size && repo.description) {
                                return (<Repo key={repo.id} {...repo} />)
                            }
                        })}          
                    </ReposHolder>
                )
        }
    }
    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }
          
    const [sections, setSections] = useState([])
    useEffect(() => {
        async function getPosts() {
          const allPosts = await fetchEntries()
          setSections(allPosts.map(item=>{return item.fields}).sort((a,b)=> a.position < b.position ? -1 : 1 ))
        }
        getPosts()
    }, [])    
    
    return(
        <HomaPage>
            <BannerHolder /> 
            {
                sections.length === 0?
                <LoaderHolder>
                    <Loader type="Grid" color={theme.colors.primary} height={100} width={100}/>
                </LoaderHolder>
                :
                sections.map((section,index)=>{
                    const Sect = sectionsHolder[section.component]                
                    return (                    
                        <Sect key={section.id} {...section} repos={repos} />
                    )
                })
            }            
        </HomaPage>
    )
}

export default Home