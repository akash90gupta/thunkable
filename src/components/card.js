import React, { Component } from 'react';
import Default from '../assets/default.png';
import Delete from '../assets/delete.png';
import Download from '../assets/download.png';
import Plus from '../assets/plus.png';
import './card.css';

class Card extends Component {
    render() {
        return ( 
            <div className = "card" > 
                {
                    this.props.type === 'CREATE' &&
                    <div>
                        <img className="plus" src={Plus} alt="plus" />
                        <div className="project_name" >Create a new app </div>
                    </div>
                }
                {
                    this.props.type === 'PROJECT' &&
                    <div> 
                        <img className="default" src={Default} alt="default"  />
                        <div className="project_name">{this.props.project.name} </div> 
                        <div className="project_lastED">{this.props.project.lastEditDate}</div>
                        <span> 
                            <img className="delete" src={Delete} alt="delete" /> 
                            <img className="download" src={Download} alt="download" />  
                        </span> 
                    </div>              
                }
            </div>
        );
    }
}

export default Card;
