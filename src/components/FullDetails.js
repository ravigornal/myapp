import React, { Component } from 'react'

export class FullDetails extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log("ravi",this.props.location.state.item)
        let arr = [] ;
         arr.push(this.props.location.state.item)
         console.log("arr",arr)
        return (
            <div>
                { arr.map(e => {
                    return(
                        <div class="card" style={{width:" 18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">{e.Price}</h5>
                            <p class="card-text">{e.details}</p>
                        </div>
                        </div>
                    )

                })}
               
            </div>
        )
    }
}

export default FullDetails
