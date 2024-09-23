import { Menu } from '@/types/menu';
import { serverFetch } from '.';
import { APP_API_URL, PATH_MENU } from '@/constants/paths';

type MenuApi = {
  getMenuList: () => Promise<Menu[]>;
};

const menuApi: MenuApi = {
  getMenuList: async () => {
    const response = await serverFetch(`${APP_API_URL}${PATH_MENU}`);
    return await response.json();
  },
};

export { menuApi };
