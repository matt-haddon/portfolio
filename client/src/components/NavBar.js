import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
        <AnchorLink href='#Home'>Home</AnchorLink>
        </li>
        <li>
        <AnchorLink href='#Portfolio'>Portfolio</AnchorLink>
        </li>
        <li>
        <AnchorLink href='#Technologies'>Technologies</AnchorLink>
        </li>
        <li>
        <AnchorLink href='#Contact'>Contact Me</AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
