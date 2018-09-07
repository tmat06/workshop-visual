import React from "react";

import Particles from "react-particles-js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Particles
          params={"Customization passed via props"}
          width="100%"
          height="100vh"
        />
      </div>
    );
  }
}

//   <Parallax
//     blur={1}
//     bgImage="/dog.jpg"
//     bgImageAlt="dog looking out a window"
//     strength={500}
//     style={{
//       height: "100vh",
//       width: "100%"
//     }}
//   >
//     {/* Text can go here */}
//   </Parallax>

//   <div>
//     <button className="btn btn-lg">OK</button>

//     <input
//       type="text"
//       className="form-control"
//       aria-label="Sizing example input"
//       aria-describedby="inputGroup-sizing-default"
//       placeholder="Username"
//     />
//   </div>
