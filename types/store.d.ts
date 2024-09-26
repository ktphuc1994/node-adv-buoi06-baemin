type Store = {
  store_id: number;
  address: string;
  name: string;
  open_hour: string | null;
  close_hour: string | null;
  price_range: string | null;
  rating: number | null;
  total_rating: number | null;
  partner_id: number | null;
};

export { Store };
