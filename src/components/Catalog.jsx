import React, { useEffect, useState } from 'react';
import { getProducts } from '../utils/api';

import CatalogItem from './CatalogItem';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const get = async () => {
      const productsList = await getProducts();
      setProducts(productsList);
    };
    get();
  }, []);

  return (
    <section>
      <h1>Store Products</h1>
      <ul>
        { products.map((product) => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
