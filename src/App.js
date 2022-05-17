import { Component } from 'react'
import Person from './components/Person';

class App extends Component {
  // You can write JS
  // If you want to manage your own data inside the component | STATE
  // State is nothing but a simple JS Object
  // States are IMMUTABLE - cannot be changed directly
  state = {
    persons: [
      { name: 'Benjamin', age: '23' },
      { name: 'John', age: '25' },
      { name: 'Max', age: '28' }
    ],
    anotherState: 'This is an another state'
  }

  switchNameHandler = () => {
    // DONOT DO THIS - this.state.persons[0].name = 'Ben' --> State will become unpredictable
    this.setState({
      persons: [
        { name: 'Ben', age: '23' },
        { name: 'Johnatthan', age: '25' },
        { name: 'Maxilliam', age: '28' }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1> Hello...Welcome to React Library! </h1>
        </div> <hr />
        <div className="container">
          {/* Props are a way to customise the Component */}
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Dummy Text 1</Person>
          <button onClick={this.switchNameHandler} className='btn btn-danger'>Switch Name</button>
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