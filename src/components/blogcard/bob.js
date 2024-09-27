import React, { Component } from 'react';
import "./bob.css";
import cartIcon from './images/icon-cart.svg';
import productImage from './images/image-product-desktop.jpg';

const ArticleSample =()=>{
    return (
      <div className='article_parent'>
        <div className='article_banner'>
          <div id='overlay'>
            <button>Read Now</button>
          </div>
        </div>
        <div className='article_text'>
          <p>Author: </p>
          <p>Date: </p>
        </div>
      </div>
    );
}

export default ArticleSample;
