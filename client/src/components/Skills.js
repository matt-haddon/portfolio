import React from 'react';
import Languages from './plugins/Languages';
import { VscDebugRestart } from 'react-icons/vsc';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

export default function Skills() {
  return (
    <div className="skillsPage">
      <div id="Technologies">
        <h1>Skills and technologies</h1>

        <h4>Languages</h4>

        <Languages />
      </div>
      <div className="software">
        <section>
          <h4>Software used</h4>
          <ul>
            <li>Visual Studio Code</li>
            <li>Adobe XD</li>
            <li>Windows, Android and iOs environments</li>
          </ul>
        </section>
        <section className="methodology">
          <h4> Working methodologies</h4>
          <div>
            <h5>
              <VscDebugRestart /> Agile methodology
            </h5>
            <p>
              I used the Agile methodology within my team projects, by breaking
              it into smaller steps and tasks, while planning, executing and
              evaluating to either improve or iterate over features at every
              stage.{' '}
            </p>
          </div>
          <div>
            <h5>
              <AiOutlineFundProjectionScreen /> Waterfall
            </h5>
            <p>
              I used the Waterfall methodology when I had to deliver a minimum
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
