import React, { Component } from 'react'

export class Grid extends Component {
    render() {
        return (
            <div className="container row mx-auto" >
                {this.props.data.map(ele => {
                    return(
                        <div class="card m-2 col-2 " >
                            <h5 class="card-title flex-fill" style={{textAlign:"center"}}>{ele}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Grid
