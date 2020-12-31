import React from 'react';
import MattLogo from '../Assets/Image/matt2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { GrLinkedin } from 'react-icons/gr';
import { FaGithubSquare } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

const Landing = () => {
  return (
    <div id="Home" className="landing-container">
      <h1>Matt Haddon</h1>
      <h3>Full Stack Software Developer</h3>
      <h4>What I do</h4>
      <section className="about-me">
        <p>
          Full Stack Software Developer with 8 years experience in the finance
          industry. In my spare time I love developing apps, learning new
          technologies, yoga, running and reading. Looking to leverage my
          software skills and management/accounting experience to add value as a
          front end, mobile or full stack engineer. Check out my latest projects
          on{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/matt-haddon"
          >
            GitHub
          </a>{' '}
          or <AnchorLink href="#Portfolio">below</AnchorLink>.
        </p>
        <img alt="logo" src={MattLogo} />
      </section>
      <section className="find-me">
        <h4>Where To Find Me</h4>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/matthaddon"
            target="_blank"
            rel="noreferrer"
            className="LinkedIn"
          >
            <GrLinkedin />
          </a>

          <a
            href="https://www.github.com/matt-haddon"
            target="_blank"
            rel="noreferrer"
            className="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a
            href="mailto:matthaddon5@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="Email"
          >
            <FaEnvelopeSquare />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Landing;
