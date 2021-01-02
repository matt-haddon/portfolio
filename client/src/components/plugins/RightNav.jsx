import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: flex-end;
  li {
    padding: 18px 50px;

    a{
       
        color: inherit;
        text-decoration: none;

    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
     
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
    
  return (
    <Ul open={open} className="navbar">
      <li><AnchorLink href='#Home' onClick={()=>{setOpen(false)}}>Home</AnchorLink ></li>
      <li><AnchorLink href='#Portfolio' onClick={()=>{setOpen(false)}}>Portfolio</AnchorLink></li>
      <li><AnchorLink href='#Technologies' onClick={()=>{setOpen(false)}}>Technologies</AnchorLink></li>
      <li><AnchorLink href='#Contact' onClick={()=>{setOpen(false)}}>Contact Me</AnchorLink></li>

    </Ul>
  )
}

export default RightNav
