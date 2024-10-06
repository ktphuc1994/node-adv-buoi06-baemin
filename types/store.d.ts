type Store = {
  store_id: number;
  address: string;
  name: string;
  image: string | null;
  open_hour: string | null;
  close_hour: string | null;
  price_range: string | null;
  rating: number | null;
  total_rating: number | null;
  partner_id: number | null;
  menuList: {
    menu_id: number;
    name: string;
  }[];
  shipping_partner?: {
    partner_name: string;
    service_fee: number;
  };
};

export { Store };
