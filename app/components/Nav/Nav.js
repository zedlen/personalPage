import React, { useState } from 'react'
import { SNav, SNavLogo, SNavLogoHolder, SLinkLogoHolder, SBrandName, NavMenu } from './style'
import PropTypes from "prop-types";
import NavItems from './NavItems'
import Link from 'next/link';

const Nav = props => {
  const [show, setShow] = useState(false);  

  return(
    <SNav>
      { (props.logo || props.brandName) && 
        <Link href="/">
          <SLinkLogoHolder>
            <SNavLogoHolder>
              {props.logo && <SNavLogo src={props.logo} alt={props.brandName} /> }
              {props.brandName &&<SBrandName>{props.brandName}</SBrandName> }
            </SNavLogoHolder>
          </SLinkLogoHolder>       
        </Link> 
      }
      <NavMenu show={show}>      
        <NavItems items={props.leftItems} show={show} setShow={setShow} />        
        <NavItems items={props.rigthItems} show={show} setShow={setShow} rigth/>          
      </NavMenu>
    </SNav>  
  )
}

export default Nav

Nav.defaultProps = {
  leftItems: [{
    route:"/index",
    text:"Item 1"
  }],
  logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
  brandName: "Brand",
  rigthItems: [{
    route:"/index#2",
    text:"Item 2",
  },{
    route:"/index#3",
    text:"Item 3",
    button: true,
    onclick:()=>alert(1)
  }], 
  navProps: {}
};

Nav.propTypes = {
  leftItems: PropTypes.array,
  logo: PropTypes.string,
  brandName: PropTypes.string,
  rigthItems: PropTypes.array,
  navProps: PropTypes.object  
};