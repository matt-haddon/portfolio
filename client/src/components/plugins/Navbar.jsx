import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  width: 100%;
  align-items: flex-end;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end
`

const Navbar = () => {
  return (
    <Nav className="mainNav">
      <Burger />
    </Nav>
  )
}

export default Navbar