import axios from 'axios';
import { RandomUser, User } from './interfaces/index';

const getRandomUser = async (): Promise<User> => {
    const response = await axios.get<RandomUser>('https://randomuser.me/api/');

    return response.data.results[0];
};

export default getRandomUser;
