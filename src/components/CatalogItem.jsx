import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getProductStock } from '../utils/api';
import { checkStockToAddProductToCart } from '../store/modules/cart/action';

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const [productsStock, setProductsStock] = useState([]);

  useEffect(() => {
    const get = async () => {
      const stockList = await getProductStock(product.id);
      setProductsStock(stockList);
    };
    get();
  }, []);

  const hasFailedStockCheck = useSelector((state) => (
    state.cart.failedStockCheck.includes(product.id)
  ));

  const handleAddProductToCart = useCallback(() => {
    dispatch(checkStockToAddProductToCart(product));
  }, [dispatch]);

  return (
    <li key={product.id}>
      {product.title}
      {' - $'}
      {product.price.toFixed(2)}
      <br />
      {' In Stock: '}
      {productsStock}
      {!hasFailedStockCheck && (
      <button
        type="button"
        onClick={() => {
          handleAddProductToCart(product);
        }}
      >
        Add to cart
      </button>
      )}
      {hasFailedStockCheck && (<button type="button" style={{ background: 'red' }}>Out of stock</button>)}
    </li>
  );
};

CatalogItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CatalogItem;
