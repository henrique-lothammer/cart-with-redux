import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../utils/api';

import { addProductToCart } from '../store/modules/cart/action';

const Catalog = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const handleAddProductToCart = useCallback((product) => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <section>
      <h1>Store Products</h1>
      <ul>
        { products.map((product) => (
          <li key={product.id}>
            {product.title}
            {' - $'}
            {product.price.toFixed(2)}
            {' '}
            <button
              type="button"
              onClick={() => {
                handleAddProductToCart(product);
              }}
            >
              Add to cart

            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
