import { serverFetch } from '.';
import { APP_API_URL, PATH_BANNER } from '@/constants/paths';
import { Banner } from '@/types/banner';

type BannerApi = {
  getAllBanner: () => Promise<Banner[]>;
};

const bannerApi: BannerApi = {
  getAllBanner: async () => {
    const response = await serverFetch(`${APP_API_URL}${PATH_BANNER}`);
    return await response.json();
  },
};

export { bannerApi };
