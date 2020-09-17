import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import WIC from '../WIC_S.png';
import bagg from '../bagg.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="cart" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-S">
                        <Link to="/" className="nav-link">
                        <img src={WIC} alt="cart" className="navbar-brand"></img>
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer className="cart-btn-top">
                        <span className="mr-2">
                        <img src={bagg} alt="cart" className="navbar-brand"></img>
                            My bag
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform: capitalize;
    }

.cart-btn-top{
    border:none;
}

.navbar-brand {
    height:2.5rem;
    width:auto;
}
`;