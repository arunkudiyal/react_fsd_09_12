import { Component } from 'react'
import Button from "./Button";
import Person from './components/Person';

class App extends Component {
  render() {
    // You can write JS

    return (
      <div>
        <div className="container-fluid">
          <h1> Hello...Welcome to React Library! </h1>
        </div> <hr />
        <div className="container">
          {/* Props are a way to customise the Component */}
          <Person name="Benjamin" age="23" />
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