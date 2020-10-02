import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
// import { render } from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')        
    .then(response => response.json())                        
    .then(users =>this.setState({monsters : users}) )
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters=> monsters.name.toLowerCase().includes(searchField.toLowerCase()))
   
    return(
      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
         placeholder = 'Search monsters' 
         handleChange = { e => this.setState({ searchField : e.target.value})}
        />
        <CardList monsters = {filteredMonsters} />  {/**prop is object of any properties that you write on this component */}
        {/**this is called children, the main properties that exit on props (anything in between barkets of our component)*/}

      </div>
    )
  }
}
export default App;
