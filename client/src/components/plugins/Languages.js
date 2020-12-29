import React from 'react';
import html from '../../Assets/Image/icons/html.png';
import css from '../../Assets/Image/icons/css.png';
import scss from '../../Assets/Image/icons/sass.png';
import javascript from '../../Assets/Image/icons/js.png';
import react from '../../Assets/Image/icons/react.svg';
import reactnative from '../../Assets/Image/icons/reactnative.png';
import redux from '../../Assets/Image/icons/redux.svg';
import angular from '../../Assets/Image/icons/angular.png';
import typescript from '../../Assets/Image/icons/typescript.png';
import node from '../../Assets/Image/icons/node.png';
import express from '../../Assets/Image/icons/express.svg';
import koa from '../../Assets/Image/icons/koa.png';
import graphql from '../../Assets/Image/icons/graphQL.png';
import sql from '../../Assets/Image/icons/sql.png';
import nosql from '../../Assets/Image/icons/nosql.png';
import jest from '../../Assets/Image/icons/jest.png';
import mocha from '../../Assets/Image/icons/mocha.png';
import chai from '../../Assets/Image/icons/chai.png';
import ReactTooltip from 'react-tooltip';

export default function languages() {
  return (
    <section>
      {/* HTML */}
      <span data-tip data-for="html">
        <img alt="html" src={html} className="imgTest" />
      </span>

      <ReactTooltip id="html" place="left" effect="float" type="info">
        HTML - Front end
      </ReactTooltip>

      {/* CSS */}
      <span data-tip data-for="css">
        <img alt="css" src={css} className="imgTest" />
      </span>

      <ReactTooltip id="css" place="left" effect="float" type="info">
        CSS - Front end
      </ReactTooltip>

      {/* SCSS */}
      <span data-tip data-for="scss">
        <img alt="scss" src={scss} className="imgTest" />
      </span>

      <ReactTooltip id="scss" place="left" effect="float" type="info">
        SASS - Front end
      </ReactTooltip>

      {/* JAVASCRIPT */}
      <span data-tip data-for="js">
        <img alt="js" src={javascript} className="imgTest" />
      </span>

      <ReactTooltip id="js" place="left" effect="float" type="info">
        JavaScript - Front end
      </ReactTooltip>

      {/* React */}
      <span data-tip data-for="react">
        <img alt="react" src={react} className="imgTest" />
      </span>

      <ReactTooltip id="react" place="left" effect="float" type="info">
        ReactJS - Front end
      </ReactTooltip>

      {/* React Native */}
      <span data-tip data-for="reactNative">
        <img alt="reactNative" src={reactnative} className="imgTest" />
      </span>

      <ReactTooltip id="reactNative" place="left" effect="float" type="info">
        ReactNative - Mobile
      </ReactTooltip>

      {/* Redux */}
      <span data-tip data-for="redux">
        <img alt="redux" src={redux} className="imgTest" />
      </span>

      <ReactTooltip id="redux" place="left" effect="float" type="info">
        Redux - Front end
      </ReactTooltip>

      {/* Angular */}
      <span data-tip data-for="angular">
        <img alt="angular" src={angular} className="imgTest" />
      </span>

      <ReactTooltip id="angular" place="left" effect="float" type="info">
        Angular - Front end
      </ReactTooltip>

      {/* TypeScript */}
      <span data-tip data-for="typescript">
        <img alt="typescript" src={typescript} className="imgTest" />
      </span>

      <ReactTooltip id="typescript" place="left" effect="float" type="info">
        Typescript - Front end
      </ReactTooltip>

      {/* Node */}
      <span data-tip data-for="node">
        <img alt="node" src={node} className="imgTest" />
      </span>

      <ReactTooltip id="node" place="left" effect="float" type="info">
        Node - Back end
      </ReactTooltip>

      {/* Express */}
      <span data-tip data-for="express">
        <img alt="express" src={express} className="imgTest" />
      </span>

      <ReactTooltip id="express" place="left" effect="float" type="info">
        Express - Back end (Node framework)
      </ReactTooltip>

      {/* Koa */}
      <span data-tip data-for="koa">
        <img alt="koa" src={koa} className="imgTest" />
      </span>

      <ReactTooltip id="koa" place="left" effect="float" type="info">
        Koa - Back end (Node framework)
      </ReactTooltip>

      {/* GraphQL */}
      <span data-tip data-for="graphQL">
        <img alt="graphQL" src={graphql} className="imgTest" />
      </span>

      <ReactTooltip id="graphQL" place="left" effect="float" type="info">
        GraphQL - Back end
      </ReactTooltip>

      {/* SQL */}
      <span data-tip data-for="sql">
        <img alt="sql" src={sql} className="imgTest" />
      </span>

      <ReactTooltip id="sql" place="left" effect="float" type="info">
        SQL - Relational databases (ex: Postgres)
      </ReactTooltip>

      {/* SQL */}
      <span data-tip data-for="nosql">
        <img alt="nosql" src={nosql} className="imgTest" />
      </span>

      <ReactTooltip id="nosql" place="left" effect="float" type="info">
        NoSQL - Non relational databases (ex: MongoDB)
      </ReactTooltip>

      {/* Jest */}
      <span data-tip data-for="jest">
        <img alt="jest" src={jest} className="imgTest" />
      </span>

      <ReactTooltip id="jest" place="left" effect="float" type="info">
        Jest - Testing (React testing library)
      </ReactTooltip>

      {/* Mocha */}
      <span data-tip data-for="mocha">
        <img alt="mocha" src={mocha} className="imgTest" />
      </span>

      <ReactTooltip id="mocha" place="left" effect="float" type="info">
        Mocha - Testing
      </ReactTooltip>

      {/* Chai */}
      <span data-tip data-for="chai">
        <img alt="chai" src={chai} className="imgTest" />
      </span>

      <ReactTooltip id="chai" place="left" effect="float" type="info">
        Chai - Testing
      </ReactTooltip>
    </section>
  );
}
