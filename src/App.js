import React, {Component} from 'react'
import './App.css';
import Header from './components/header'

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
    </div>)
  }
}

export default App;
