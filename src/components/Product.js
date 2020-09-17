import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import add from '../add.png';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

// eslint-disable-line no-use-before-define

export default class Product extends Component {
    render() {
        const { id, title, img, price, size, inCart, company} = this.props.product;
        return (
            <ProductWrapper className="col-10 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                    {value => (
                        <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart? true : false} onClick={()=>{value.addToCart(id); value.openModal(id);}}>
                            {inCart?(<p className="text-capitalize mb-0" disabled>in Cart</p>):(<div className="added-to-cart"><img src={add} alt="product" className="add-to-cart-btn-img"/></div>)}
                        </button>
                    </div>
                    )}
                    </ProductConsumer>   
                   {/*Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-left mb-0">
                             {title}
                        </p> 
                        <p className="text-blue mb-0">
                            <span className="mr-1"></span>
                             {company}
                        </p>
                    </div>
                    <div className="card-footer">
                        <p className="text-blue mb-0">
                            <span className="mr-1"></span>N$
                             {price}
                        </p>
                    </div>
                    
                </div>
                
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:propTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all .5s linear;
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
}

.add-to-cart-btn-img {

}

&:hover{
    .card{
        border: transparent; //0.04rem solid rgba(0,0,0,0.2);
        box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2);
    }

    .card-footer{
        background: rgba(247,247,247);
    }
}

.img-contianer{
    position:relative;
    overflow: hidden;
}

.card-img-top {
    transition: all .5s linear;
}

.img-container:hover .card-img-top{
    transform: scale(1.2);
}

.cart-btn{
    position:absolute;
    background:transparent;
    transform: scale(.0);
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    border: none;
    font-size:1.4rem;
    transition: all 1.5s linear;
}


.img-container:hover .cart-btn{
    transform: translate(-110%,-350%);
}

.cart-btn:hover{
    cursor: pointer;
}


`;