import axios from '@/utils/axios';

const getTickets = async () => {
  try {
    const test = await axios.get('tickets');
    console.log(test)
    return test.data;
  } catch ({ response }) {
    throw response;
  }
};

export default {
  getTickets,
}