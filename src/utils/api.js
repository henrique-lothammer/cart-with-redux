const wait = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms),
);

async function getProducts() {
  const products = [
    {
      id: 1,
      title: 'Cool Coat',
      price: 290.90,
    },
    {
      id: 2,
      title: 'Cheap Glasses',
      price: 20.90,
    },
    {
      id: 3,
      title: 'Fashion Shoes',
      price: 500.00,
    },
  ];
  await wait(100);
  return products;
}

async function getProductStock(id) {
  const stock = [
    {
      id: 1,
      stock: 2,
    },
    {
      id: 2,
      stock: 5,
    },
    {
      id: 3,
      stock: 10,
    },
  ];

  const returnStock = stock.find((item) => item.id === id);
  await wait(100);
  return returnStock.stock;
}

export { getProducts, getProductStock };
