import React, { Component } from 'react';
import Card from  '../components/card';  
import Header from  '../components/header';
import Search from  '../components/search';
//import './App.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { 
                    id: 0,
                    name: 'Demo App 1',
                    lastEditDate: '31-09-2017'
                },
                { 
                    id: 1,
                    name: 'Demo App 2',
                    lastEditDate: '31-09-2017'
                },
                { 
                    id: 2,
                    name: 'Demo App 3',
                    lastEditDate: '31-09-2017'
                }]
        }
    }   

    render(){
        return ( 
        <div className = "dashboard" > 
            <Header/>
            <Search/>
            <div className="cards-wrapper">
                <Card type="CREATE" />
                {
                    this.state.cards.map((c) => <Card key={c.id} type="PROJECT" project={c} />)
                }                 
            </div>    
        </div>
        );
    }
}

export default Dashboard;
