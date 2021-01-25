import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { removeProductFromCart, checkStockToAddProductToCart, subtractProductFromCart } from '../store/modules/cart/action';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector((state) => (
    state.cart.failedStockCheck.includes(item.product.id)
  ));

  const handleRemove = useCallback((id) => {
    dispatch(removeProductFromCart(id));
  }, [dispatch]);

  const handleSubtract = useCallback((id) => {
    dispatch(subtractProductFromCart(id));
  }, [dispatch]);

  const handleAdd = useCallback(() => {
    dispatch(checkStockToAddProductToCart(item.product));
  }, [dispatch]);

  return (
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
        <button type="button" style={hasFailedStockCheck ? { background: 'red' } : { background: 'black' }} onClick={() => handleAdd(item.product)}>+</button>
      </td>
      <td className="align-right">
        {' $'}
        {(item.product.price * item.quantity).toFixed(2)}
      </td>
      <td>
        <button type="button" onClick={() => handleRemove(item.product.id)}>X</button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
