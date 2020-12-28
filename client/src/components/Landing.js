import React from 'react';
import MattLogo from '../Assets/Image/matt2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing = () => {
  return (
    <div id="Home" className="landing-container">
      <h1>Matt Haddon</h1>
      <h3>Full Stack Software Developer</h3>
      <h6>What I do</h6>
      <section>
      <p>
        Full Stack Software Developer with 8 years experience in the finance
        industry. In my spare time I love developing apps, learning new
        technologies, yoga, running and reading. Looking to leverage my software
        skills and management/accounting experience to add value as a front end,
        mobile or full stack engineer. Check out my latest projects on {' '} 
        <a target="_blank" href="https://www.github.com/matt-haddon">GitHub</a> or  <AnchorLink href='#Portfolio'>below</AnchorLink>.
      </p>
      <img src={MattLogo}/>
      </section>
    </div>
  );
};

export default Landing;
