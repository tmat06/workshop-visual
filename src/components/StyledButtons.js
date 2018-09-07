import React, { Component } from "react";

//import for Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//imports for Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//import for Semantic UI
import "semantic-ui-css/semantic.min.css";

class StyledButtons extends Component {
  constructor() {
    super();
    this.state = {
      styled: ""
    };
  }

  renderSwitch() {
    switch (this.state.styled) {
      case "bootstrap":
        return (
          <div className="login-box">
            <h1>Bootstrap</h1>
            <div>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "bootstrap" })}
              >
                BootStrap
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                Material UI
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "semantic" })}
              >
                Semantic
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "" })}
              >
                Default
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                style={{ width: 200 }}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Username"
              />
              <input
                style={{ width: 200 }}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Username"
              />
            </div>
            <button className="btn btn-secondary btn-lg btn-block">
              Log In
            </button>
          </div>
        );
      case "material-ui":
        return (
          <div className="login-box">
            <h1>Material-UI</h1>
            <div>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "bootstrap" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Bootstrap
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Material-UI
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "semantic" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Semantic
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Default
                </p>
              </Button>
            </div>
            <div>
              <TextField
                style={{ padding: 24 }}
                placeholder="Username"
                margin="normal"
              />
              <TextField
                style={{ padding: 24 }}
                placeholder="Password"
                margin="normal"
              />
            </div>
            <Button variant="outlined">
              <p
                style={{
                  fontFamily: "font-family: Roboto, sans-serif",
                  fontWeight: "bold"
                }}
              >
                Default
              </p>
            </Button>
          </div>
        );
      case "semantic":
        return (
          <div className="login-box">
            <h1>Semantic</h1>
            <div>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "bootstrap" })}
              >
                Bootstrap
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                Material UI
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "semantic" })}
              >
                Semantic
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "" })}
              >
                Default
              </button>
            </div>
            <div>
              <div class="ui focus input">
                <input type="text" placeholder="Username" />
              </div>
              <div class="ui focus input">
                <input type="text" placeholder="Password" />
              </div>
            </div>
            <button class="fluid ui button">Log In</button>
          </div>
        );
      default:
        return (
          <div className="login-box">
            <h1>Default</h1>
            <div>
              <button onClick={() => this.setState({ styled: "bootstrap" })}>
                BootStrap
              </button>
              <button onClick={() => this.setState({ styled: "material-ui" })}>
                Material UI
              </button>
              <button onClick={() => this.setState({ styled: "semantic" })}>
                Semantic
              </button>
              <button onClick={() => this.setState({ styled: "" })}>
                Default
              </button>
            </div>
            <div>
              <input placeholder="Username" />
              <input placeholder="Password" />
            </div>
            <button>Log In</button>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderSwitch()}</div>;
  }
}

export default StyledButtons;
