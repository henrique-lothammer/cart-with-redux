import { getProductStock } from '../../../utils/api';

export function checkStockToAddProductToCart(product) {
  return async (dispatch, getState) => {
    const productStock = await getProductStock(product.id);

    const myCart = getState().cart;
    const productInCartIndex = myCart.items.findIndex((item) => product.id === item.product.id);

    if (productInCartIndex >= 0 && myCart.items[productInCartIndex].quantity >= productStock) {
      dispatch({
        type: 'ADD_PRODUCT_TO_ERROR_LIST',
        payload: {
          product,
        },
      });
    } else {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        payload: {
          product,
        },
      });
    }
  };
}

export function subtractProductFromCart(id) {
  return (dispatch) => {
    dispatch({
      type: 'SUBTRACT_PRODUCT_FROM_CART',
      payload: {
        id,
      },
    });
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_ERROR_LIST',
      payload: {
        id,
      },
    });
  };
}

export function removeProductFromCart(id) {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      payload: {
        id,
      },
    });
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_ERROR_LIST',
      payload: {
        id,
      },
    });
  };
}
