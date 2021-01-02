import React from 'react';
import DreamHome from '../Assets/Image/DreamHomeMockUp.png';

export default function Portfolio() {
  return (
    <div id="Portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>My Work</h1>
        </div>
        <div className="DreamHome-container">
          <div className="DreamHome-text">
            <h4>Find your dream home...</h4>
            <p>
              With remote work becoming more prevalent, especially with
              Coronavirus, living a commutable distance from the office is no
              longer a necessity for many.
            </p>
            <p>
              DreamHome allows users to explore potential new properties in
              locations across the UK based upon budget and other preferences.
            </p>
            <p>Who knows where Dream Home could take you?</p>
          </div>
          <div className="DreamHome-image">
            <img alt="" src={DreamHome} />
          </div>
        </div>
        <div className="go-to-github">
          <p>
            Check out more projects on my{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/matt-haddon"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
