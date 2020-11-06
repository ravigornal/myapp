import React, { Component } from 'react'
import './Image.css'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export class Grid extends Component {
    render() {
        return (
            <div className="d-flex flex-row mt-2" >
                {this.props.data.map((item) => {
                    return (
                        <div class="card ml-2">
                                    <Link to={{ pathname:`/details/${item.product_name}`, state:{item}}}><div class="">
                                        <div class="card" key={item.id}>
                                        <img class="card-img-top" src={item.thumb} />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.product_name}</h5>
                                                <p class="card-text">{item.Price}</p>
                                            </div>
                                        </div>
                                    </div></Link>
                            </div>
                    )
                })}
            </div>
        )
    }
}

export default Grid
