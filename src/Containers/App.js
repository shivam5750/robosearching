import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(ressponse => ressponse.json())
        .then(users => this.setState({ robots: users}) )
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length?
        <h1 className='tc f2'>Loading</h1>:

        (<div className ="tc">
            <h1 className="f1">Robo Friends</h1>
            <SearchBox searchChange ={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots ={ filteredRobots } />
                </ErrorBoundary>
            </Scroll>
        
        </div>)
            
    }
}


export default App;