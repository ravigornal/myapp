import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Image.css'

export class List extends Component {
    render() {
        return (
            <div>
            {this.props.data.map((item) => {
                return (
                    <div>
                        <div class="container grid-container mt-3" >
                            <div class="row">
                                <Link to={{ pathname:`/details/${item.product_name}`, state:{item}}}><div class="col-12 col-md-6 col-lg-4">
                                    <div class="card d-flex flex-row" key={item.id} onClick={()=><Link to={'/ferrariDetails'}></Link>}>
                                        <img class="card-img-top" src={item.thumb} />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.product_name}</h5>
                                            <p class="card-text">{item.Price}</p>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                        
                    </div>
        )
    })}
    </div>
        )
}
}

export default List
