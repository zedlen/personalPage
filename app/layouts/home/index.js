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
    ContactHolder,
    ContactData,
    ContactForm,
    TextArea,
    Button
} from './style';
import { fetcher, github_fetcher } from '../../helpers';
import {
    Input
} from '../../components'
import useSWR from 'swr'
import Repo from './repo';
import { ABOUT, TECHS } from '../../constants/sections';

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
    const openURL = (url) => {
        window.open(url,'_blank')
    }
    const sendInfo = (event) => {
        event.preventDefault();
        const formElements = event.target.elements
        var postData={};
        for (var i=0; i<formElements.length; i++)
            if (formElements[i].type!="submit")//we dont want to include the submit-buttom
                postData[formElements[i].name]=formElements[i].value;
        console.log("esta es la informacion a mandar", postData)
        alert('Esta funcion aun esta pendiente de implementación')
    }
    return(
        <div>
            <BannerHolder /> 
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
                    <ContactData>
                        <img src={'/static/images/data.png'}/>
                    </ContactData>
                    <ContactForm>
                        <form onSubmit={sendInfo} id={"contactData"}>
                            <Input placeholder={"Asunto"} name={"subject"} />
                            <Input placeholder={"Contacto (mail o telefono)"} name={"contact"} />
                            <TextArea placeholder={"Mensaje"} name={"message"} />
                            <Button>Enviar</Button>
                        </form>
                    </ContactForm>
                </ContactHolder>   
            </Section>
        </div>
    )
}

export default Home