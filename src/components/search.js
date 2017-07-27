import React, { Component } from 'react';
import Searchimage from '../assets/search.png';
import './search.css';

class Search extends Component {
    render() {
        return ( 
        <div className = "search" >
           <div>
                <img className="searchimage" src={Searchimage} alt="searchimage"  />    
           </div>   
            <div className = "filter" >
                
                <span className="filterDetails">Sort By: &nbsp;
                    <select>
                            <option value="lastEdit">Last Edit</option>
                            <option value="size">Size</option>
                    </select>
                </span>
            </div>
        </div>

        );
    }
}

export default Search;
