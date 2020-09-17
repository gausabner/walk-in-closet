import React, {Component} from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';



export default class Modal extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen,closeModal} = value;
                    const{img, title, size, price} = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto my-auto col-md-6 col-lg-4 text-center">
                                        <h5 className="py-4"> Item bagged </h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h6>{title}</h6>
                                        <h6 className="text-muted">N$  {price}</h6>
                                        <h6 className="text-muted">sizes: {size}</h6>
                                        <div>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='cart'>
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                go to bag
                                            </ButtonContainer>
                                        </Link>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </ModalContainer> 
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite);
    padding-bottom: 2rem;
    border-radius: 0.02rem;
}
`;