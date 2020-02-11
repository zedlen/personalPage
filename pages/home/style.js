import styled from "styled-components";

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
    display: grid;
    grid-template-columns: repeat(12, 1fr);    
`;

export const RepoHolder = styled.div`
    display: table-cell;
    grid-column: span 4;
    padding: 10px;
    position:relative;
    padding: 15px;
    border: 1px solid ${({theme})=>theme.colors.lightPrimary};
    margin: 15px;
    border-radius:5px;
    background: #fafafa;
    box-shadow: 4px 4px  15px rgba(0,0,0,0.25);
`;

export const RepoTitle = styled.h3`
    color:${({theme})=>theme.colors.strongPrimary};
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

export const AboutTitle = styled.h1`
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
    background-color: ${({ bg }) => bg ? bg : '#fff' };
`;