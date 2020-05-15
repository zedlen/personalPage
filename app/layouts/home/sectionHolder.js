import React from 'react';
import { 
    Section,
    SectionTitle,
    AboutItem,
    AboutImage,
    AboutTextHolder,    
    AboutTitle,
    AboutText,
    TechsHolder,
    TechHolder,
    TechsLogo,
    ContactHolder,
    ContactData,
    ContactForm,
    TextArea,
    Button
} from './style';
import {
    Input
} from '../../components'
const About = props => {
    return (
        <Section id={props.id}>
                <SectionTitle>{props.title}</SectionTitle>
                {props.items.map( ( item, index ) => 
                    <AboutItem key={'about'+index} position={index % 2 == 0 ? 'left' : 'rigth' }>
                        <AboutImage image={item.image} alt={item.title}/>                
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
    )
}

const Work = props => {
    return(
        <Section bg='rgba(125,125,125,0.2)' id={props.id}>
            <SectionTitle>{props.title}</SectionTitle>
            { props.repos }                                     
        </Section>    
    )
}

const Knowledge = props => {
    const openURL = (url) => {
        window.open(url,'_blank')
    }
    return(
        <Section  id={props.id}>
        <SectionTitle>{props.title} </SectionTitle>
            <TechsHolder>
                {
                    props.items.map((tech,index) => {
                        return(
                            <TechHolder key={index} background={tech.background} onClick={()=>openURL(tech.url)}>
                                <TechsLogo src={tech.image} alt={tech.name} />
                            </TechHolder>
                        )
                    })
                }
            </TechsHolder>          
    </Section>
    )
}

const Contact = () => {
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
    return (
        <Section bg='rgba(125,125,125,0.2)' id={'contact'}>
            <ContactHolder>
                <ContactData>
                    <img src={'/static/images/data.png'} alt={'contact'}/>
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
    )
}

export {
    About,
    Work,
    Knowledge,
    Contact,
}