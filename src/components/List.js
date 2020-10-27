import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map(list => {
                        return(
                            <li>{list}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List
