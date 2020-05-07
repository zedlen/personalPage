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
    SectionTitle,
    TechsHolder,
    TechHolder,
    TechsLogo,
    ContactHolder
} from './style';
import { fetcher, github_fetcher } from '../../helpers';
import useSWR from 'swr'
import Repo from './repo';
import { ABOUT, TECHS } from '../../constants/sections';

const Home = ({__NEXT_DATA__}) => {
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
    const openURL = (url) => {
        window.open(url,'_blank')
    }
    return(
        <div>
            <BannerHolder assetPrefix={__NEXT_DATA__.assetPrefix}/> 
            <Section id={ABOUT.id}>
                <SectionTitle>{ABOUT.TITLE}</SectionTitle>
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
            <Section bg='rgba(125,125,125,0.2)' id={'projects'}>
                <SectionTitle>Mis proyectos (desde GitHub)</SectionTitle>
                { repos }                                     
            </Section>
            <Section  id={TECHS.id}>
                <SectionTitle>{TECHS.TITLE} </SectionTitle>
                    <TechsHolder>
                        {
                            TECHS.data.map((tech,index) => {
                                return(
                                    <TechHolder key={index} background={tech.background} onClick={()=>openURL(tech.url)}>
                                        <TechsLogo src={tech.image} alt={tech.name} />
                                    </TechHolder>
                                )
                            })
                        }
                    </TechsHolder>          
            </Section>
            <Section bg='rgba(125,125,125,0.2)' id={'contact'}>
                <ContactHolder>
                    <div style={{flex:1}}>info</div>
                    <div style={{flex:1}}>formulario</div>
                </ContactHolder>   
            </Section>
        </div>
    )
}

export default Home