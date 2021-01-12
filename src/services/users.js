import axios from '@/utils/axios';

const getUsers = async () => {
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch ({ response }) {
    throw response;
  }
};

export default {
  getUsers,
}