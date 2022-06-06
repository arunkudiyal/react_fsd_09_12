import { Component } from 'react'
import Person from './components/Person/Person';
import Footer from './components/Footer/Footer';

class App extends Component {
  // You can write JS
  // If you want to manage your own data inside the component | STATE
  // State is nothing but a simple JS Object
  // States are IMMUTABLE - cannot be changed directly
  constructor(props) {
    super();
    console.log(`[App.js] constructor`)
    this.state = {
      persons: [
        { id: 'person-one', name: 'Benjamin', age: '23' },
        { id: 'person-two', name: 'John', age: '25' },
        { id: 'person-three', name: 'Max', age: '28' },
        { id: 'person-four', name: 'Steve', age: '35' },
        { id: 'person-five', name: 'Mark', age: '30' }
      ],
      anotherState: 'This is an another state',
      showPersons: false,
      showFooter: true
    }
  }

  // Lifecycle Methods
  static getDerivedStateFromProps = (props, state) => {
    console.log(`[App.js] getDerivedStateFromProps()`);
    // console.log(props)
    // console.log(state)
    return state
  }

  componentDidMount = () => {
    console.log(`[App.js] componentDidMount()`);
    // Make side-effect / Make API calls
  }

  changeNameHandler = (event, personId) => {
    // Find the index of the person based on the ID of the person
    const index = this.state.persons.findIndex(p => p.id === personId)
    // Fetching the object value of the person based on the index
    const person = { ...this.state.persons[index] }
    // Cahnging the name property to the value coming from the input box
    person.name = event.target.value
    // Fetching the value of the persons state and creating a physical array
    const newPersons = [...this.state.persons]
    // Changing the person value in the array copy
    newPersons[index] = person
    // Setting the actual state of the application
    this.setState({ persons: newPersons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  switchNameHandler = () => {
    // DONOT DO THIS - this.state.persons[0].name = 'Ben' --> State will become unpredictable
    this.setState({
      persons: [
        { id: 'person-one', name: 'Ben', age: '23' },
        { id: 'person-two', name: 'Johnatthan', age: '25' },
        { id: 'person-three', name: 'Maxilliam', age: '28' }
      ],
      anotherStateValue: false
    })
  }

  removeFooterhandler = () => {
    const showFooterValue = this.state.showFooter
    this.setState({ showFooter: !showFooterValue })
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons]
    newPersons.splice(personIndex, 1)
    this.setState({ persons: newPersons })
  }

  render() {
    console.log(`[App.js] render()`);
    // JavaScript --> Which will be in immediate use for the return() method
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <div className="container">
            {/* Props are a way to customise the Component */}
            <div>
              {this.state.persons.map((person, index) => {
                return <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  persons={this.state.persons}
                  delete={() => this.deletePersonHandler(index)}
                  changed={(event) => this.changeNameHandler(event, person.id)} />
              })}
            </div>
            <button onClick={this.switchNameHandler} className='btn btn-danger'>Switch Name</button>
          </div>
        </div>
      )
    }

    return (
      // <div> --> document.createElement('div')
      <div>
        <div className="container-fluid">
          <h1> {this.props.appTitle} </h1>
        </div> <hr />

        <button onClick={this.togglePersonsHandler} className='btn btn-primary'>Toggle Persons</button>
        <hr />
        {persons}

        <Footer personsList={this.state.persons} showFooter={this.state.showFooter} removeFooter={this.removeFooterhandler} text='&copy; Innomatics Research Labs' />
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