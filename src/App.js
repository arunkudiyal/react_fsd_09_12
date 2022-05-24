import { Component } from 'react'
import Person from './components/Person/Person';

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
    anotherState: 'This is an another state',
    showPersons: false
  }

  changeNameHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Ben', age: '23' },
        { name: e.target.value, age: '25' },
        { name: 'Maxilliam', age: '28' }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  switchNameHandler = () => {
    // DONOT DO THIS - this.state.persons[0].name = 'Ben' --> State will become unpredictable
    this.setState({
      persons: [
        { name: 'Ben', age: '23' },
        { name: 'Johnatthan', age: '25' },
        { name: 'Maxilliam', age: '28' }
      ],
      anotherStateValue: false
    })
  }

  render() {
    return (
      // <div> --> document.createElement('div')
      <div>
        <div className="container-fluid">
          <h1> Hello...Welcome to React Library! </h1>
        </div> <hr />

        <button onClick={this.togglePersonsHandler} className='btn btn-primary'>Toggle Persons</button>
        <hr />

        {
          this.state.showPersons === true ?
            <div>
              <div className="container">
                {/* Props are a way to customise the Component */}
                <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age} />
                <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  changed={this.changeNameHandler} />
                <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age} >Dummy Text 1</Person>
                <button onClick={this.switchNameHandler} className='btn btn-danger'>Switch Name</button>
              </div>
            </div> :
            null
        }

      </div>
    )
  }
}
export default App;

// function App() {
//   // useState( JS Object which contains the value of the state )
//   // HOOKS ARE ONLY AVAILABLE IN REACT VERSION >= v.16.8
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Benjamin', age: '23' },
//       { name: 'John', age: '25' },
//       { name: 'Max', age: '28' }
//     ]
//   })

//   const [anotherState, setAnotherState] = useState('This is an another state')

//   const [anotherStateValue, setAnotherStateValue] = useState(true)

//   const [source, setSource] = useState('https://www.google.com')

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'Ben', age: '23' },
//         { name: 'Johnatthan', age: '25' },
//         { name: 'Maxilliam', age: '28' }
//       ]
//     })
//   }

//   // JSX --> JS Syntax Xtension --> Syntactic Sugar -> JS which looks like HTML
//   // documnet.createElement('div').setAttribute('class', 'App') | <div className="App"></div>
//   // JSX --> JS --> HTML  ---> BABEL is a compiler
//   return (
//     <div>
//       <div>
//         <div className="container-fluid">
//           <h1> Hello...Welcome to React Library! </h1>
//         </div> <hr />
//         <div className="container">
//           {/* Props are a way to customise the Component */}
//           <Person
//             name={personState.persons[0].name}
//             age={personState.persons[0].age} />
//           <Person
//             name={personState.persons[1].name}
//             age={personState.persons[1].age} />
//           <Person
//             name={personState.persons[2].name}
//             age={personState.persons[2].age} >Dummy Text 1</Person>
//           <button onClick={switchNameHandler} className='btn btn-danger'>Switch Name</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;