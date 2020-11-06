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
        let data = [
        {
            id:1,
            product_name:"Ferrari",
            Price:"100M",
            thumb:"./Images/1.jpg",
            details:" Ferrari is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id:2,
            product_name:"Lambo",
            Price:"100M",
            thumb:"./Images/2.jpg",
            details:" Lambo is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        },
        {
            id:3,
            product_name:"Ninja",
            Price:"100M",
            thumb:"./Images/3.jpg",
            details:" Ninja is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        },
        {
            id:4,
            product_name:"Audi",
            Price:"100M",
            thumb:"./Images/4.jpg",
            details:" Audi is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        }]
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
