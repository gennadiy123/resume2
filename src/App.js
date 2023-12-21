import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>GENNADIY SHELUKHIN</h1>
        <p>FRONT-END DEVELOPER</p>
      </div>
      <div className="information">
        <div>
          <div>
            <h2>CONTACTS</h2>
            <a href="tel:+380501340252">+38 (050) 134-02-52</a>
            <a href="mailto:shelukhin_g@ukr.net">shelukhin_g@ukr.net</a>
            <a>Telegram</a>
            <a
              href="https://www.linkedin.com/in/gennadiy-shelukhin/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
            <p>Kyiv, Ukraine</p>
          </div>
          <div>
            <h2>SKILLS</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>REST API</li>
              <li>Git</li>
              <li>React Testing Library</li>
              <li>Jest</li>
              <li>styled components</li>
              <li>GraphQl</li>
            </ul>
          </div>
          <div>
            <h2>LANGUAGES</h2>
            <ul>
              <li>Ukrainian - Native</li>
              <li>Russian - Fluent</li>
              <li>English - Upper-Intermediate</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h2>SUMMARY</h2>
            <p>
              Inspired Front-end developer with strong analytical thinking and
              well-developed organizational skills. Ambitious, highly
              responsible, punctual, and goal- oriented person, have experience
              in working with multilingual teams, always ready to learn and gain
              new experiences. Organized and experienced engineer with ability
              to focus on details and time management are also good strength of
              mine.
            </p>
          </div>
          <div>
            <h2>PROJECTS</h2>
            <ul>
              <li>
                <div>
                  <a
                    href="https://apps.apple.com/ua/app/kidhab/id1550279631"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KidHub
                  </a>
                  <p>(React Native, TypeScript, Apollo GraphQL)</p>
                </div>
                <p>
                  Mobile application for developing healthy habits in children
                </p>
              </li>
              <li>
                <div>
                  <a
                    href="https://kid-hab.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KidHub landing page
                  </a>
                  <p>(React, Gatsby)</p>
                </div>
                <p>Landing page of mobile application</p>
              </li>
            </ul>
          </div>
          <div>
            <h2>EXPERIENCE</h2>
            <ul>
              <li>
                <h3>Goodface</h3>
                <p>September 2023 - December 2023</p>
                <ul>
                  <li>
                    Developed website for company which provides new
                    technologies for agriculture
                  </li>
                  <li>
                    Implemented new features for platform to exchange
                    cryptocurrencies/fiat.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Softserve</h3>
                <p>June 2021 - March 2023</p>
                <ul>
                  <li>
                    Ensured code quality and reliability by implementing
                    comprehensive unit tests to cover critical functionality,
                    resulting in significant reduction in bugs.
                  </li>
                  <li>
                    Successfully migrated legacy code to modern technologies,
                    refactored codebase, and optimized application performance.
                  </li>
                  <li>
                    Contributed to the development of new features, wrote
                    thorough documentation, conducted application redesign and
                    effectively debugged code issues.
                  </li>
                  <li>
                    Resolved minor and major production issues, minimizing
                    downtime, and ensuring seamless operations for key business
                    systems.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Go IT</h3>
                <p>June 2020 - June 2021</p>
                <ul>
                  <li>
                    Implemented registration functionality using QR-code,
                    created an admin panel and developed a landing page for the
                    application which helped increase customer engagement by
                    25%.
                  </li>
                  <li>
                    Implementing smooth functionality and optimal user
                    experience, resulting in a 20% reduction in system response
                    time.
                  </li>
                  <li>
                    Provided instruction on React to a group of students and
                    facilitated a team project by creating a comprehensive
                    backlog for their tasks.
                  </li>
                  <li>
                    Actively participated in Agile ceremonies, such as daily
                    stand-ups, sprint planning, and retrospective meetings,
                    fostering effective communication and collaboration within
                    the development team.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>EDUCATION</h2>
            <h3>Go IT</h3>
            <p>Fullstack Developer | 2019 - 2020</p>
            <h3>Sumy State University</h3>
            <p>Automation and control systems, Master degree | 2006 - 2011</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
