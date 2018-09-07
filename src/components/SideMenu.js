import React from "react";
import { withRouter, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class SideMenu extends React.Component {
  renderDescription() {
    switch (this.props.location.pathname) {
      case "/parallax":
        return (
          <div>
            <h1>Parallax</h1>
            <h3>
              <i>npm install react-parallax</i>
            </h3>
            <p>
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
          </div>
        );
      default:
        return <div>dog</div>;
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
        </div>
        {this.renderDescription()}
      </div>
    );
  }
}

export default withRouter(SideMenu);
