import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Apple from "../images/Apple2.png";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-2">Product</h4>
                <h4 className="cart-col-1">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-2 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img 
                        src={Apple} 
                        className="img-fluid" 
                        alt="product image" 
                    />
                  </div>
                  <div className="w-100">
                    <h5>Apple Product</h5>
                    <p>Color: Red</p>
                    <p>Size: Medium</p>
                  </div>
                </div>
                <div className="cart-col-1">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <input 
                    className="form-control" 
                    type="number" 
                    min={1} 
                    max={10}
                    id="" 
                  />
                  <MdDelete className="text-danger cursor-pointer" />
                </div>
                <div className="cart-col-4">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                    <Link to="/product" className="button">
                        Continue To Shipping
                    </Link>
                    <div className="d-flex flex-column align-items-end">
                        <h4>Subtotal: $ 1000</h4>
                        <p>tases and shipping calculated at checkout</p>
                        <Link to='/checkout' className="button">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;
