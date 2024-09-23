import { Menu } from '@/types/menu';
import { serverFetch } from '.';
import { APP_API_URL, PATH_FOOD } from '@/constants/paths';
import { TodayFood } from '@/types/food';

type FoodApi = {
  getTodayFood: () => Promise<TodayFood[]>;
};

const foodApi: FoodApi = {
  getTodayFood: async () => {
    const response = await serverFetch(`${APP_API_URL}${PATH_FOOD}/today`);
    return await response.json();
  },
};

export { foodApi };
