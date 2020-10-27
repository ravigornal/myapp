import React, { Component } from 'react'
import List from './List'
import Grid from './Grid'

export default class GridAndList extends Component {
    constructor(){
        super();
        this.state={
            check:true
        }
    }

    trigger =()=> {
        this.setState({
            check:!this.state.check
        })
    }

    render() {
        let data = ["January - 31 days",
            "February - 28 days",
            "March - 31 days",
            "April - 30 days",
            "May - 31 days",
            "June - 30 days",
            "July - 31 days",
            "August - 31 days",
            "September - 30 days",
            "October - 31 days",
            "November - 30 days",
            "December - 31 days"]
        return (
            <div>
                <div className="flex-coloumn mt-3">
                    <button type="button" class="btn btn-primary mr-3" onClick={this.trigger}>List View</button>
                    <button type="button" class="btn btn-secondary " onClick={this.trigger}>Grid View</button>
                </div>
                {this.state.check ? <List  data={data}/>
                : <Grid  data={data}/>}
            </div>
        )
    }
}
