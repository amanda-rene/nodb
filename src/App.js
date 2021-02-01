import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'

class App extends Component{

  constructor(){
    super()
    this.state={
      weapon: ''
    }
  }

  render(){
    return(
    <div className='app'>
      <Header />
      <List />

    </div>)
  }
}

export default App;
