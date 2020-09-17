import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row mt-4 mb-5">
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-capitalize">Item</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-capitalize">Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-capitalize">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">Size (1-13)</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-capitalize">Total</p>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <p className="text-capitalize">Remove</p>
                </div>
            </div>
        </div>
    );
}