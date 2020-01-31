import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const SNav = styled.nav`
    padding: 15px 0px 15px 0;
    outline: none;
    display: flex;
    flex-direction: row;
    background: ${ ({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.navBackground };
    position: fixed;
    top: 0;
    height: 40px;
    width: 100%;
`;

export const SNavLogo = styled.img`    
    height: 100%;
`;

export const SNavLogoHolder = styled.div`    
    display: flex;
    position: relative;
    flex-direction: row;
    height: 40px;    
    padding: 0 5px;
`;

export const SLinkLogoHolder = styled.a`        
    &:visited:link:active {                
        text-decoration: none;
    }
    cursor: pointer;
`;

export const SBrandName = styled.p`        
   margin: auto;
   heigth: 100%;
   color: ${ ({ theme, textColor }) => textColor ? textColor : theme.colors.brandTextColor };
   line-heigth:40px;
   padding: 0 15px;
`;

export const NavMenu = styled.div`
    display: flex; 
    flex: 1;
    position: relative;    
    @media ${breakpoints.mobileS} {
        padding-top: 40px;          
        flex-direction: column;  
        div:last-child{
            border-bottom-rigth-radius: 5px;         
            border-bottom-left-radius: 5px;         
            padding-bottom: ${({show})=>show?"20px":""};
        }
    }
    @media ${breakpoints.tablet} {
        .icon{
            display:none;
        }
        .responsive{
            display: flex !important;
            width: auto !important;            
        }
        padding-top: 0;  
        flex-direction: row;
    }
`;

export const NavItemsHolder = styled.div`    
    flex: 1;    
    justify-content: ${ ({ rigth }) => rigth ? 'flex-end' : 'flex-start' };
    align-content: center;    
    display: flex;
    padding: 0 20px;
    @media ${breakpoints.mobileS} {
        .responsive:not(.show){
            display:none;
        }
        .responsive.show{            
            width:100%;
            background:${ ({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.navBackground };                        
        }                
        display:flex; 
        flex-direction: column;  
        background:${ ({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.navBackground };                                            
    }
    @media ${breakpoints.tablet} {
        .icon{
            display:none;
        }
        .responsive{
            display: flex !important;
            width: auto !important;            
        }
        display: flex;
        flex-direction: row;
    }
`;

export const MenuIcon = styled.div`    
    font-size: 32px;
    color: transparent;
    user-select: none;
    position: absolute;
    z-index: 999;
    top:0;
    right: 10px;
    display: inline-block;
    box-sizing: border-box;
    overflow: visible;
    vertical-align: top;
    font-style: normal;
    height: 1em;
    width: 1em;
    mix-blend-mode: multiply;
    cursor: pointer;
    &:before,:after{
        border-color: #fff;
        color: #fff;
        content: '';
        position: absolute;
        display: block;
        box-sizing: border-box;
    }
    &:before{ 
        border-color: #000;
        height: 0.75em;
        width: 1em;
        border-width: 0.125em 0;
        background: transparent;
        border-style: solid;
        top: 0.125em;
        left: 0;
        border-radius:2px;
    }
    &:after{ 
        border-color: #000;
        height: 0px;
        width: 1em;
        background: transparent;
        border-width: 0.125em 0 0 0;
        border-style: solid;
        top: 0.4375em;
        left: 0;
        border-radius:2px;
    }
    &:hover{
        border-color: #777;
    }
`;

export const SLinkItemHolder = styled.a`        
    &:visited:link:active {                
        text-decoration: none;
    }
    cursor: pointer;
`;

export const NavItemHolder = styled.div`    
    display: flex;
    position: relative;
    flex-direction: row;
    height: 40px;    
    padding: 0 5px;
    background-color:${({ theme, button })=>button?theme.colors.navButtonColor:''} !important;
    border-radius:${({ button })=>button?'5px':'10px'};
    cursor:${({  button })=>button?'pointer':''};

    &:hover{
        background-color: ${({  hoverColor, theme })=>hoverColor?hoverColor:theme.colors.navItemHover} !important;
    }
`;

export const NavItemText = styled.p`    
    margin: auto;
    heigth: 100%;
    color: ${ ({ theme, textColor }) => textColor ? textColor : theme.colors.brandTextColor };
    line-heigth:40px;
    padding: 0 15px;    
`;