import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
  const [cartTotal, useCartTotal] = useState(0);

  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    const result = cart.reduce((total, next) => next.product.price * next.quantity + total, 0);
    useCartTotal(result);
  }, [cart]);

  return (
    <section>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th className="align-right">Price</th>
            <th className="align-right">Quantity</th>
            <th className="align-right">Subtotal</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {cart.length <= 0 && (
            <tr>
              <td className="empty-cart-text" colSpan="5">Empty cart</td>
            </tr>
          )}
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
          <tr />
          <tr>
            <td colSpan="2" />
            <td>
              Total:
            </td>
            <td className="align-right">
              {' $'}
              {cartTotal.toFixed(2)}
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
