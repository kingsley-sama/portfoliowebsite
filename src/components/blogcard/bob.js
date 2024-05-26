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
          <h1>P e r f u m e</h1>

          <h2>Gabrielle Essence Eau De Parfum</h2>
          
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          
          <div className="price">
            <p className="discount-price">$149.99</p>
            <p className="real-price">$169.99</p>
          </div>
          
          <button>
            <i><img src={cartIcon} alt="Cart Icon" /></i>
            Add to Cart
          </button>
        </section>
      </main>
    );
  }
}

export default ProductReview;
