import { serverFetch } from '.';
import { APP_API_URL, PATH_STORE } from '@/constants/paths';
import { Store } from '@/types/store';

type StoreApi = {
  getStoreById: (storeId: number) => Promise<Store>;
};

const storeApi: StoreApi = {
  getStoreById: async (storeId) => {
    const response = await serverFetch(
      `${APP_API_URL}${PATH_STORE}/${storeId}`
    );
    return await response.json();
  },
};

export { storeApi };
