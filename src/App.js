import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
// import { render } from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [{
        name : 'sddfsgg',
        email: 'gdfgif@gkmod.com',
        id:1
      },
      {
        name : "fgiuiouf",
        email : "fgdfgdfd@gdf.com",
        id : 2
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 3
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 4
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 5
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 6
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 7
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 8
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 9
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 10
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 11
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 12
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 13
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 14
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 15
      },
      {
        name : "wrdfggd",
        email : "sdhfeg@fgnf.com",
        id : 16
      },],
     
      searchField : ''
    }
  }

  // componentDidMount(){
  //   fetch('http://jsonplaceholder.typicode.com/users')        
  //   .then(response => response.json())                        
  //   .then(users =>this.setState({monsters : users}) )
  // }

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
