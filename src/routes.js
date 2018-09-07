import React from "react";
import { Switch, Route } from "react-router-dom";
// import StyledButtons from "./components/StyledButtons";
import SlickExample from "./components/SlickExample";
import ParallaxExample from "./components/Parallax";
import ChartJS from "./components/Chartjs";
import ParticlesJS from "./components/Particles";
import TestRun from "./components/TestRun";

export default (
  <Switch>
    <Route exact path="/" component={SlickExample} />
    <Route path="/parallax" component={ParallaxExample} />
    <Route path="/chart" component={ChartJS} />
    <Route path="/particles" component={ParticlesJS} />
    <Route path="/testrun" component={TestRun} />
  </Switch>
);
