import React from 'react'
import Productcard from './Productcard'
const MainContent = () => {
    console.log(Productcard)
    const listItems = Productcard.map((item) =>
        <div>
            <div class="container grid-container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card" key={item.id}>
                            <img class="card-img-top" src={item.thumb} />
                            <div class="card-body">
                                <h5 class="card-title">{item.product_name}</h5>
                                <p class="card-text">{item.price}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
    return (
        <div className='container'>
            {listItems}
        </div>
    )
}
export default MainContent