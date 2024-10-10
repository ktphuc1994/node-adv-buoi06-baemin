import { clientFetch } from '.';
import { APP_API_URL, PATH_USER } from '@/constants/paths';
import { UserProfile } from '@/types/user';

type UserApi = {
  getUserProfile: () => Promise<UserProfile>;
};

const userApi: UserApi = {
  getUserProfile: async () => {
    const response = await clientFetch(`${APP_API_URL}${PATH_USER}/profile`);
    return await response.json();
  },
};

export { userApi };
