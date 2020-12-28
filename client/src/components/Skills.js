import React from 'react';
import react from '../Assets/Image/icons/react.svg';
import reactnative from '../Assets/Image/icons/reactnative.png';
import redux from '../Assets/Image/icons/redux.svg';
import angular from '../Assets/Image/icons/angular.png';
import typescript from '../Assets/Image/icons/typescript.png';
import node from '../Assets/Image/icons/node.png';
import express from '../Assets/Image/icons/express.svg';
import koa from '../Assets/Image/icons/koa.png';
import graphql from '../Assets/Image/icons/graphQL.png';
import sql from '../Assets/Image/icons/sql.png';
import nosql from '../Assets/Image/icons/nosql.png';
import jest from '../Assets/Image/icons/jest.png';
import mocha from '../Assets/Image/icons/mocha.png';
import chai from '../Assets/Image/icons/chai.png';

export default function Skills() {
  return (
    <div className="skillsPage">
      <div id="Technologies">
        <h1>Skills and technologies</h1>
        <p>
          I develop my applications using Javascript technologies and tools,
          such as:
        </p>
        <h4>Front-end</h4>
        <section>
          <ul>
            <li>
              React
              <img src={react} />
            </li>
            <li>
              React Native
              <img src={reactnative} />
            </li>
            <li>
              Redux
              <img src={redux} />
            </li>
            <li>
              Angular
              <img src={angular} />
            </li>
            <li>
              TypeScript
              <img src={typescript} />
            </li>
          </ul>
        </section>
        <section>
          <h4>Back-end</h4>
          <ul>
            <li>
              NodeJs
              <img src={node} />
            </li>
            <li>
              Express
              <img src={express} />
            </li>
            <li>
              Koa
              <img src={koa} />
            </li>
            <li>
              GraphQL
              <img src={graphql} />
            </li>
            <li>
              SQL
              <img src={sql} />
            </li>
            <li>
              NoSQL
              <img src={nosql} />
            </li>
          </ul>
        </section>
        <section>
          <h4>Testing</h4>
          <ul>
            <li>
              Jest (with React Testing library)
              <img src={jest} />
            </li>
            <li>
              Mocha
              <img src={mocha} />
            </li>
            <li>
              Chai
              <img src={chai} />
            </li>
          </ul>
        </section>
      </div>
      <div className="software">
        <section>
          <h1>Software used</h1>
          <ul>
            <li>Visual Studio Code</li>
            <li>Adobe XD</li>
            <li>Windows, Android and iOs environments</li>
          </ul>
        </section>
        <section className="methodology">
          <h1> Working methodologies</h1>
          <div>
            <h4>Agile methodology</h4>
            <p>
              I used the Agile methodology within my team projects, by breaking
              it into smaller steps and tasks, while planning, executing and
              evaluating to either improve or iterate over features at every
              stage.{' '}
            </p>
          </div>
          <div>
            <h4>Waterfall</h4>
            <p>
              I used the Vaterfall methodology when I had to deliver a minimum
              viable product within a week. I mapped the project into distinct
              and sequential phases, beginning each new feature only when the
              previous one has been completed. I working in a linear way towards
              delivering the MVP.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
