import React, { Component } from 'react';
import "./bob.css";
import cartIcon from './images/icon-cart.svg';
import productImage from './images/image-product-desktop.jpg';

class ProductReview extends Component {
  render() {
    return (
      <main>
        <section className="left">
          <img src={productImage} alt="Parfum image" />
        </section>
        <section className="right">
          <h1>D  e  v  O  p  s</h1>

          <h2>what happens when www.google.com and hit enter</h2>
          
          <p>
            An intricate dive into the working principle behind every web request
            that has ever been sent.
          </p>
          
          <div className="price">
            <p className="discount-price">nohup Kingsley</p>
            <p className="real-price">22/04/2024</p>
          </div>
          
          <button>
            Read Full Article
          </button>
        </section>
      </main>
    );
  }
}

export default ProductReview;
