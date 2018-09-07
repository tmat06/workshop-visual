import React from "react";
import { withRouter, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class SideMenu extends React.Component {
  renderDescription() {
    switch (this.props.location.pathname) {
      case "/":
        return (
          <div>
            <h1>Slick</h1>
            <h3>
              <div>
                <a href="https://github.com/akiran/react-slick" target="_blank">
                  https://github.com/akiran/react-slick
                </a>
              </div>
              <p style={{ fontStyle: "italic" }}>
                npm install react-slick slick-carousel
              </p>
              <p style={{ fontStyle: "italic" }}>
                @import "~slick-carousel/slick/slick-theme.css"
              </p>
              <p style={{ fontStyle: "italic" }}>
                @import "~slick-carousel/slick/slick.css"
              </p>
            </h3>
            <p className="side-menu-description">Slick YO</p>

            <img src="/slick-simple-example.PNG" style={{ width: "100%" }} />
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
    const { mot, toggleSlide } = this.props;
    return (
      <div
        id="side-menu"
        style={{ transform: `translateX(${mot.x}px)` }}
        onClick={() => toggleSlide()}
      >
        <div
          style={{
            opacity: mot.opacity,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "green"
          }}
        >
          Dog
        </div>
        <div id="nav-buttons">
          <Link to="/">
            <button class="ui button" role="button">
              Slick
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
