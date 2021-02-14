import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => this.setState({ robots: users }))
  };
  render() {
    const { robots, searchField } = this.state;
    let filteredrobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1> Random Robot Finder </h1>
        <SearchBox placeholder='Search robots' handleChange={(event) => this.setState({ searchField: event.target.value })} />

        <CardList robots={filteredrobots} />
      </div>
    );
  };
}

export default App;