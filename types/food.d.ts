type FoodRequest = {
  foodName?: string;
  menuId?: number;
  storeId?: number;
  page?: number;
  pageSize?: number;
};

type Food = {
  food_id: string;
  name: string;
  price: number;
  description: string | null;
  image: string;
  store_id: number;
  tags: string[];
};

type TodayFood = Food & {
  store_name: string;
  store_address: string;
  store_id: number;
};

export { Food, TodayFood, FoodRequest };
