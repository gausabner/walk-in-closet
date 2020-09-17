import React from 'react';
import {Link} from 'react-router-dom';


export default function CartTotals ({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div   div className="col-10 mt-2 ml-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-capitalize mb-3 px-5" type="button" onClick={() => clearCart()}>clear your bag</button>
                    </Link>
                    <h6>
                        <span className="text-title">
                            subtotal :
                        </span>
                        <strong>
                            N$ {cartSubTotal}
                        </strong>
                    </h6>
                    <h6>
                        <span className="text-title">
                            Tax :
                        </span>
                        <strong>
                            N$ {cartTax}
                        </strong>
                    </h6>
                    <h6>
                        <span className="text-title">
                            Total :
                        </span>
                        <strong>
                            N$ {cartTotal}
                        </strong>
                    </h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}