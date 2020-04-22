import React from 'react';
import { 
    BannerHolder, 
    ReposHolder, 
    AboutItem,
    AboutImage,
    AboutTextHolder,
    AboutText, 
    AboutTitle,
    Section,
    SectionTitle
} from './style';
import { fetcher, github_fetcher } from '../../helpers';
import useSWR from 'swr'
import Repo from './repo';
import { ABOUT } from '../../constants/sections';

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
    return(
        <div>
            <BannerHolder /> 
            <Section id={ABOUT.id}>
                <SectionTitle>Sobre mi</SectionTitle>
                {ABOUT.info.map( ( item, index ) => 
                    <AboutItem key={'about'+index} position={index % 2 == 0 ? 'left' : 'rigth' }>
                        <AboutImage image={item.image}/>                
                        <AboutTextHolder>
                            <AboutTitle>
                                {item.title}
                            </AboutTitle>
                            <AboutText>
                                {item.body}
                            </AboutText>
                        </AboutTextHolder>
                    </AboutItem> 
                )}
            </Section>
            <Section bg='rgba(125,125,125,0.1)' id={'projects'}>
                <SectionTitle>Mis proyectos (desde GitHub)</SectionTitle>
                { repos }                                     
            </Section>
        </div>
    )
}

export default Home