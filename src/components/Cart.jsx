import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeProductFromCart, addProductToCart, subtractProductFromCart } from '../store/modules/cart/action';

const Cart = () => {
  const [cartTotal, useCartTotal] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleRemove = useCallback((id) => {
    dispatch(removeProductFromCart(id));
  }, [dispatch]);

  const handleSubtract = useCallback((id) => {
    dispatch(subtractProductFromCart(id));
  }, [dispatch]);

  const handleAdd = useCallback((product) => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

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
            <tr key={item.product.id}>
              <td>
                {item.product.title}
              </td>
              <td className="align-right">
                {' $'}
                {(item.product.price).toFixed(2)}
              </td>
              <td className="align-right">
                <button type="button" onClick={() => handleSubtract(item.product.id)}>-</button>
                {' '}
                {item.quantity}
                {' '}
                <button type="button" onClick={() => handleAdd(item.product)}>+</button>
              </td>
              <td className="align-right">
                {' $'}
                {(item.product.price * item.quantity).toFixed(2)}
              </td>
              <td>
                <button type="button" onClick={() => handleRemove(item.product.id)}>X</button>
              </td>
            </tr>
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
