import React, { Component } from 'react';

import '../styles/tourlist.scss';
import Tour from '../Tourlist/Tour';
import tourData from '../../tourData';


export default class Tourlist extends Component {
    state = {
        tours: tourData
    };
    removeTours = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !==id)
        this.setState({
            tours:sortedTours
        })
    }
    render() {
        const {tours} = this.state;
    
        return (
            <section className="tour-list">
                {tours.map(tour => {
                    return(
                        <Tour key={tour.id} tour={tour} removeTours = {this.removeTours}/>
                    )
                })}
            </section>
        )
    }
}
