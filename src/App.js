import { Component } from 'react'
import Button from "./Button";

class App extends Component {
  render() {
    // You can write JS

    return (
      <div>
        <div className="container-fluid">
          <h1> Hello...Welcome to React Library! </h1>
        </div>
        <div className="container">
          {/* Props are a way to customise the Component */}
          <Button text="Button - 1" color="primary" props2="" />
          <Button text="Button - 2" color="danger" />
          <Button text="Button - 3" color="success" />
          <Button text="Button - 4" color="muted" />
          <Button text="Button - 5" color="info" />
          <Button text="Button - 6" color="warning" />
          <Button color="success" />
        </div>
      </div>
    )
  }
}
export default App;

// function App() {
// JSX --> JS Syntax Xtension --> Syntactic Sugar -> JS which looks like HTML
// documnet.createElement('div').setAttribute('class', 'App') | <div className="App"></div>
//   // JSX --> JS --> HTML  ---> BABEL is a compiler
//   return (
//     <div>
//       <div className="container-fluid" >
//         <h1> Hello...Welcome to React Library! </h1>
//       </div>
//       <div className="container">
//          <Button />
//          <Button />
//          <Button />
//          <Button />
//          <Button />
//          <Button />
//          <Button />
//       </div>
//     </div>
//   );
// }
// export default App;