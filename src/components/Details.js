import React, { Component } from 'react';
import{ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        size,
                        title,
                        inCart
                    } = value.detailProduct;               
                    return (
                    <div className="container py-5">
                        {/* title */}
                         <div className="row">
                             <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                             </div>
                         </div>
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                           <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="image-fluid" alt="product" />
                            </div>
                            {/* product text */} 
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h5>{title}</h5>
                                <h6 className="text-title text-muted mt-3 mb-4">
                                    <span className="text">{company}</span>
                                </h6>
                                <h4 className="text-blue mt-4">
                                    <strong>
                                        N$<span>{price}</span>
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Info:
                                </p>
                                <p className="text-muted lead">{info}</p>
                                  {/*buttons*/}
                                  <div>
                                    <Link to='/'>
                                        <ButtonContainer >
                                            back
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart?true:false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart ? "in bag":"add to bag"}
                                    </ButtonContainer>
                                  </div>  
                            </div>
                        </div>
                        {/* product info ends*/}
                    </div>
                );
                }}
            </ProductConsumer>
        );
    }

}