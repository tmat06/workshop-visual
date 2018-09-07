import React from "react";
import { withRouter, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class SideMenu extends React.Component {
  renderDescription() {
    switch (this.props.location.pathname) {
      case "/":
        return (
          <div>
            <h1>Styling Libraries</h1>
            <h3>
              <div>
                <h3>Bootstrap</h3>
                <a
                  href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
                  target="_blank"
                >
                  https://getbootstrap.com/docs/4.1/getting-started/introduction/
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>npm install bootstrap</p>
            </h3>
            <p className="side-menu-description">
              Originally created by a designer and a developer at Twitter,
              Bootstrap has become one of the most popular front-end frameworks
              and open source projects in the world. Bootstrap was created at
              Twitter in mid-2010 by @mdo and @fat. Prior to being an
              open-sourced framework, Bootstrap was known as Twitter Blueprint.
              A few months into development, Twitter held its first Hack Week
              and the project exploded as developers of all skill levels jumped
              in without any external guidance. It served as the style guide for
              internal tools development at the company for over a year before
              its public release, and continues to do so today. Originally
              released on Friday, August 19, 2011. With Bootstrap 2, we added
              responsive functionality to the entire framework as an optional
              stylesheet. Building on that with Bootstrap 3, we rewrote the
              library once more to make it responsive by default with a mobile
              first approach. With Bootstrap 4, we once again rewrote the
              project to account for two key architectural changes: a migration
              to Sass and the move to CSS’s flexbox. Our intention is to help in
              a small way to move the web development community forward by
              pushing for newer CSS properties, fewer dependencies, and new
              technologies across more modern browsers.
            </p>

            <img
              src="/bootstrap-simple-example.PNG"
              style={{ width: "100%" }}
            />
            <h3>
              <div>
                <h3>Material UI</h3>
                <a href="https://material-ui-next.com/" target="_blank">
                  https://material-ui-next.com/
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>
                npm install @material-ui/core
              </p>
            </h3>
            <p className="side-menu-description">
              Material-UI's Vision: "Our vision is to provide an elegant React
              implementation of the Material Design guidelines that can be
              customized to fully match your brand". The Material Design
              guidelines are an incredible starting point, but they do not
              provide guidance on all aspects or needs of an application. In
              addition to the guidelines-specific implementation, we want
              Material-UI to become whatever is generally useful for application
              development, all in the spirit of the Material Design guidelines.
              Therefore, Material-UI will be not only be an implementation of
              the Material Design guidelines, but a general use UI library of
              components that are needed by many. This generalized use doesn't
              imply any other design methodology. It also means we will have
              components or combinations that are simply not addressed in the
              design guidelines. We will focus on providing all the low-level
              tools needed to build a rich user-interface with React. Once we
              implement the Material design specification (which is a bar set
              quite high), you should be able to take advantage of it for you
              own business with any style customization needed. We want to see
              companies succeeding using Material-UI in a way that matches their
              brand, close to the material philosophy or not. We don't want them
              to feel that their UI simply looks like another Google product.
              From a developer's point of view, we want Material-UI to: Deliver
              on fully encapsulated / composable React components. Be themeable
              / customizable. Be cross browser compatible and accessible.
              Promote developer joy, a sense of community, and an environment
              where new and experienced developers can learn from each other.
            </p>

            <img src="/material-simple-example.PNG" style={{ width: "100%" }} />
            <h3>
              <div>
                <h3>Semantic</h3>
                <a href="https://react.semantic-ui.com/" target="_blank">
                  https://react.semantic-ui.com/
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>
                npm install semantic-ui-react semantic-ui-css
              </p>
            </h3>
            <p className="side-menu-description">
              Semantic UI is a modern front-end development framework, powered
              by LESS and jQuery (is now compatible with React via
              semantic-ui-react). It has a sleek, subtle, and flat design look
              that provides a lightweight user experience. According to the
              Semantic UI website, the goal of the framework is to empower
              designers and developers “by creating a language for sharing UI”.
              They do this by leveraging a semantic, descriptive language for
              its classes and naming conventions. Instead of using
              abbreviations, as other frameworks do, it utilizes real words in a
              manner closer to plain English.
            </p>

            <img src="/semantic-simple-example.PNG" style={{ width: "100%" }} />
          </div>
        );
      case "/parallax":
        return (
          <div>
            <h1>Parallax</h1>
            <h3>
              <div>
                <a
                  href="https://www.npmjs.com/package/react-parallax"
                  target="_blank"
                >
                  https://www.npmjs.com/package/react-parallax
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>npm install react-parallax</p>
            </h3>
            <p className="side-menu-description">
              The term “parallax” first came from the visual effect of 2D side
              scrolling videogames that used different background image movement
              speeds to create the illusion of depth during gameplay. This was
              generally done by making the background of the game move slower
              than the foreground in order to make it seem further away. This
              same concept applies to parallax site design in which the
              background of the website moves at a different speed as the rest
              of the page for an impressive visual effect that allows for
              countless creative applications for online storytelling.
            </p>

            <img src="/parallax-simple-example.PNG" style={{ width: "100%" }} />
          </div>
        );
      case "/chart":
        return (
          <div>
            <h1>Chart.js</h1>
            <h3>
              <div>
                <a href="http://www.chartjs.org/docs/latest/" target="_blank">
                  http://www.chartjs.org/docs/latest/
                </a>
              </div>
              <div>
                <a
                  href="https://www.npmjs.com/package/react-chartjs-2"
                  target="_blank"
                >
                  https://www.npmjs.com/package/react-chartjs-2
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>npm install chart.js</p>
              <p style={{ fontStyle: "italic" }}>npm install react-chartjs-2</p>
            </h3>
            <p className="side-menu-description">
              Chart.js is a community maintained project where one can visualize
              data in 8 different ways; each of them animated and customisable.
              Excellent rendering performance across all modern browsers (IE9+).
              Examples of charts that can be rendered are{" "}
              <span style={{ fontWeight: "bolder" }}>Line</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Bar</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Radar</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Doughnut & Pie</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Polar Area</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Bubble</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Scatter</span>,{" "}
              <span style={{ fontWeight: "bolder" }}>Area</span>, and{" "}
              <span style={{ fontWeight: "bolder" }}>Mixed</span>
            </p>

            <img src="/chartjs-simple-example.PNG" style={{ width: "100%" }} />
          </div>
        );
      case "/particles":
        return (
          <div>
            <h1>Particles.js</h1>
            <h3>
              <div>
                <a
                  href="https://www.npmjs.com/package/react-particles-js"
                  target="_blank"
                >
                  https://www.npmjs.com/package/react-particles-js
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>
                npm install react-particles-js
              </p>
            </h3>
            <p className="side-menu-description">
              A lightweight Javascript library for creating particles. Created
              by Vincent Garreau.
            </p>

            <img
              src="/particles-simple-example.PNG"
              style={{ width: "100%" }}
            />
          </div>
        );
      default:
        return (
          <div>
            <h1>Bootstrap</h1>
            <h3>import 'bootstrap/dist/css/bootstrap.min.css'</h3>
            <h1>Material UI</h1>
            <h3>import Button from '@material-ui/core/Button'</h3>
            <h1>Semantic</h1>
            <h3>import 'semantic-ui-css/semantic.min.css'</h3>
            <h1>Parallax</h1>
            <h3>
              import {"{"}
              Parallax
              {"}"} from 'react-parallax'
            </h3>
            <h1>Chart.js</h1>
            <h3>
              import {"{"}
              Doughnut
              {"}"} from 'react-chartjs-2'
            </h3>
            <h1>Particle.js</h1>
            <h3>import Particles from 'react-particles-js'</h3>
          </div>
        );
    }
  }
  render() {
    return (
      <div id="side-menu">
        <div id="nav-buttons">
          <Link to="/">
            <button class="ui button" role="button">
              Styling Libraries
            </button>
          </Link>
          <Link to="/parallax">
            <button class="ui button" role="button">
              Parallax
            </button>
          </Link>
          <Link to="/chart">
            <button class="ui button" role="button">
              Chart.js
            </button>
          </Link>
          <Link to="/particles">
            <button class="ui button" role="button">
              Particles
            </button>
          </Link>
          <Link to="/testrun">
            <button class="ui button" role="button">
              TestRun
            </button>
          </Link>
        </div>
        {this.renderDescription()}
      </div>
    );
  }
}

export default withRouter(SideMenu);
