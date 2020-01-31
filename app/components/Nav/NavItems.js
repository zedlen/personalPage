import React from 'react'
import Link from 'next/link'
import PropTypes from "prop-types";
import { NavItemsHolder, SLinkItemHolder, MenuIcon } from './style';
import NavItem from './NavItem';

const NavItems = props => {    
    return(  
        <NavItemsHolder {...props}>
            {props.items.map((item, index) => <NavItem key={'navItem'+ index + '' + props.rigth} className={'responsive ' + (props.show?'show':'')} {...item} />)}
            { props.rigth && <MenuIcon onClick={()=>{props.setShow(!props.show);}} className='icon' />}
        </NavItemsHolder>    
    )
}

export default NavItems