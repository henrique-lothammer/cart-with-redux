export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}

export function subtractProductFromCart(id) {
  return {
    type: 'SUBTRACT_PRODUCT_FROM_CART',
    payload: {
      id,
    },
  };
}

export function removeProductFromCart(id) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: {
      id,
    },
  };
}
