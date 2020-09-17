import React from 'react';
import redremove from '../../svg/redremove.svg';

export default function CartItem ({item,value}) {
    const {id,title,img,price,sizes,total,count} = item;
    const {increment,decrement,removeItem,sizeDecrement,sizeIncrement} = value;
    return (
        <div className="row my-3 text-capitalize text-center"> 
            <div className="col-10 mx-auto col-lg-1">
                <img src={img} style={{width:'7rem',height:'auto'}} className="image-fluid" alt="product"></img>
            </div>
            <div className="col-10 mx-auto col-lg-1">
                <span className="d-lg-none">product:
                </span>
                {title} 
            </div>
            <div className="col-10 mx-auto col-lg-1">
                <span className="d-lg-none">price:
                </span>
                {price} 
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=> sizeDecrement(id) }>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {sizes}
                        </span>
                        <span className="btn btn-black mx-1" onClick={()=> sizeIncrement(id) }>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=> decrement(id) }>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={()=> increment(id) }>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-1">
                    <strong> item total : N$ 
                    </strong>
                    {total} 
            </div>
            <div className="col-10 mx-auto col-lg-1">
                    <div className="trash-icon" onClick={()=>removeItem(id)}>
                        <img src={redremove} style={{width:'1.5rem',height:'auto'}} alt="product"></img>
                    </div> 
                </div>
        </div>
    )
}