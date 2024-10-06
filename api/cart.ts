import { Cart, UpdateCartItemRequest } from '@/types/cart';
import { clientFetch } from '.';
import { APP_API_URL, PATH_CART } from '@/constants/paths';

type CartApi = {
  getTotalItems: () => Promise<number>;
  getCartInfo: () => Promise<Cart[]>;
  addToCart: (foodId: number) => Promise<unknown>;
  updateItem: (
    foodInfo: UpdateCartItemRequest,
    signal?: AbortSignal
  ) => Promise<unknown>;
  deleteItem: (foodId: number) => Promise<unknown>;
};

const cartApi: CartApi = {
  getTotalItems: async () => {
    const response = await clientFetch(`${APP_API_URL}${PATH_CART}/total`);
    return await response.json();
  },
  getCartInfo: async () => {
    const response = await clientFetch(`${APP_API_URL}${PATH_CART}`);
    return await response.json();
  },
  addToCart: async (foodId) => {
    return await clientFetch(`${APP_API_URL}${PATH_CART}/add`, {
      method: 'POST',
      body: JSON.stringify({ food_id: foodId }),
    });
  },
  updateItem: async (foodInfo, signal) => {
    return await clientFetch(`${APP_API_URL}${PATH_CART}/update`, {
      method: 'PUT',
      body: JSON.stringify(foodInfo),
      signal,
    });
  },
  deleteItem: async (foodId: number) => {
    return await clientFetch(`${APP_API_URL}${PATH_CART}/remove/${foodId}`, {
      method: 'DELETE',
    });
  },
};

export { cartApi };
