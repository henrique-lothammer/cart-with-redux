import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  failedStockCheck: [],
};

const cart = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      const productInCartIndex = draft.items.findIndex(
        (item) => item.product.id === product.id,
      );

      if (productInCartIndex >= 0) {
        draft.items[productInCartIndex].quantity += 1;
      } else {
        draft.items.push({
          product,
          quantity: 1,
        });
      }

      return draft;
    }
    case 'SUBTRACT_PRODUCT_FROM_CART': {
      const { id } = action.payload;

      const productInCartIndex = draft.items.findIndex(
        (item) => item.product.id === id,
      );

      if (productInCartIndex >= 0) {
        if (draft.items[productInCartIndex].quantity === 1) {
          draft.items.splice(productInCartIndex, 1);
        } else {
          draft.items[productInCartIndex].quantity -= 1;
        }
      }

      return draft;
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      const { id } = action.payload;

      const productInCartIndex = draft.items.findIndex(
        (item) => item.product.id === id,
      );

      if (productInCartIndex >= 0) {
        draft.items.splice(productInCartIndex, 1);
      }

      return draft;
    }
    case 'ADD_PRODUCT_TO_ERROR_LIST': {
      const { product } = action.payload;

      const productInCartErrorIndex = draft.failedStockCheck.findIndex(
        (item) => item === product.id,
      );

      if (productInCartErrorIndex === -1) {
        draft.failedStockCheck.push(product.id);
      }

      return draft;
    }
    case 'REMOVE_PRODUCT_FROM_ERROR_LIST': {
      const { id } = action.payload;
      const productInCartErrorIndex = draft.failedStockCheck.findIndex(
        (item) => item === id,
      );

      if (productInCartErrorIndex >= 0) {
        draft.failedStockCheck.splice(productInCartErrorIndex, 1);
      }

      return draft;
    }
    default:
      return draft;
  }
});

export default cart;
