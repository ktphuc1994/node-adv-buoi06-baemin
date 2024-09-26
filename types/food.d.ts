type Food = {
  food_id: string;
  name: string;
  image: string;
};

type TodayFood = Food & {
  store_name: string;
  store_address: string;
  store_id: number;
};

export { Food, TodayFood };
