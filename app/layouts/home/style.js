import styled from "styled-components";
import { breakpoints } from '../../breakpoints'

export const HomaPage = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
`;

export const LoaderHolder = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
    margin: 2rem 0;
`;


export const BannerHolder = styled.div`
    width: 100%;
    height: 400px;
    background-image: url('/static/images/background.png');
    background-repeat: no-repeat;    
    background-position: center;
    background-size: cover;
`;

export const ReposHolder = styled.div`
    width: 100%;        
    flex-direction: row;    
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`;

export const RepoHolder = styled.div`       
    position: relative;
    padding: 15px;    
    margin: 15px;
    border-radius: 5px;
    background: #fafafa;
    box-shadow: 4px 4px  15px rgba(0,0,0,0.25);
    @media (min-width: 0px) {
        width: 85%; 
    }
    @media ${breakpoints.tablet} {
        width: 42%; 
    }
    @media ${breakpoints.laptop} {
        width: 27%; 
    }
    transition: all 200ms;
    &:hover{
        transform: scale(1.1);
    }
`;

export const RepoTitle = styled.span`
    color:${({theme})=>theme.colors.strongPrimary};
    font-size: 1.2rem;
    text-transform: uppercase;
`;

export const RepoDescription = styled.p`
    color:${({theme})=>theme.colors.lightPrimary};    
`;

export const RepoLink = styled.a`
    color:${({theme})=>theme.colors.lightPrimary};    
`;


export const AboutItem = styled.div`
    display: flex;
    flex-direction: ${({ position }) => position == "left" ? "row" : "row-reverse" };
    background: ${({ theme }) => theme.colors.lightPrimary };
    margin: 10px;
`;

export const AboutImage = styled.div`
    flex: 1;    
    background-image: url(${({ image }) => image ? image : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const AboutTextHolder = styled.div`
    flex: 2;
    padding: 1.5em 3em;
    margin: 0;
`;

export const AboutTitle = styled.h2`
    text-align: center;
    padding: 2px 10px;
    color: ${({ theme }) => theme.colors.primaryContrast };
`;

export const AboutText = styled.p`
    text-align: justify;
    padding: 5px 10px;
    color: ${({ theme }) => theme.colors.primaryContrast };
`;

export const Section = styled.div`
    padding: 5em 1em;
    background-color: ${({ bg }) => bg ? bg : 'transparent' };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    &#contact{
        width: calc(100% - 2rem);
    }   
`;

export const SectionTitle = styled.h1`
    text-align: center;
`;

export const TechsHolder = styled.div`    
    flex-direction: row;    
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`;

export const TechsLogo = styled.img`
    width: 100%;            
`;

export const TechHolder = styled.div`
    position: relative;
    padding: 15px;    
    margin: 15px;
    border-radius: 5px;
    background: ${ ({ background, color }) =>   background === 'dark' ? '#afafaf' : '#fafafa' };
    box-shadow: 4px 4px  15px rgba(0,0,0,0.25);
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    @media (min-width: 0px) {
        width: 40%; 
    }
    @media ${breakpoints.tablet} {
        width: 25%; 
    }
    @media ${breakpoints.laptop} {
        width: 19%; 
    }
    transition: all 200ms;
    &:hover{
        transform: scale(1.1);
    }      
`;

export const ContactHolder = styled.div`        
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
    @media (min-width: 0px) {
        flex-direction: column; 
    }
    @media ${breakpoints.laptop} {
        flex-direction: row; 
    }
`;

export const ContactData = styled.div`    
    flex-direction: row;    
    flex: 1;
    align-items: center;
    justify-content: center;    
    display: flex;
    &>img{        
        @media (min-width: 0px) {
            height: 100%; 
        }
        @media ${breakpoints.laptop} {
            width: 100%; 
        }
    }
`;

export const ContactForm = styled.div`    
    flex-direction: column;    
    flex: 1;
    align-items: center;
    justify-content: center;   
    padding: 1rem;
    &>form{
        width: 100%;
        align-items: center;
        justify-content: center;  
        display: flex;
        flex-direction: column;
    }     
`;

export const TextArea = styled.textarea`
  padding: .5rem .1rem;
  outline: none;
  width: ${ ({ width }) => width ? width : '100%' };
  border-radius: .2rem;
  border: 1px solid #afafaf;
  margin: .5rem 0;
  resize: none;
  font-size: 1.05rem;
  height: 5rem;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
    padding: .5rem;
    border-radius: .2rem;
    font-size: 1.05rem;
    width: 40%;
`;