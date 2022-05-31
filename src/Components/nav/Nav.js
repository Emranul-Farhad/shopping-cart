import React from 'react';
import './Nav.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Nav = () => {
    return (
        <div>
            <div className='d-flex justify-content-between container'>
                <div> <h1>Book Review</h1>
                </div>
                <div>
                  <span><AiOutlineShoppingCart></AiOutlineShoppingCart></span>
                   <span>0</span>
                </div>
            </div>
        </div>
    );
};

export default Nav;