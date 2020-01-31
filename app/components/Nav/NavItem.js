import React from 'react'
import Link from 'next/link'
import PropTypes from "prop-types";
import { NavItemHolder, SLinkItemHolder, NavItemText } from './style';

const NavItem = props => {
    if (props.button) {
        return(            
        <NavItemHolder {...props} onClick={props.onclick}>
            <NavItemText>{props.text}</NavItemText>
        </NavItemHolder>) 
    }
    /*if (props.dropdown) {
        return(            
        <NavItemHolder {...props} onClick={props.onclick}>
            <NavItemText>{props.text}</NavItemText>
        </NavItemHolder>) 
    }*/
    return(
    <Link href={props.route}>
        <SLinkItemHolder>
            <NavItemHolder {...props}>
                <NavItemText>{props.text}</NavItemText>
            </NavItemHolder>    
        </SLinkItemHolder>
    </Link>)
}

export default NavItem