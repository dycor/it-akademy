import axios from '@/utils/axios';

const getTickets = async () => {
  try {
    const { data } = await axios.get('/tickets');
    return data;
  } catch ({ response }) {
    throw response;
  }
};

const postTicket = async ticket => {
  try {
    const { data } = await axios.post('/tickets',ticket);
    return data;
  } catch ({ response }) {
    throw response;
  }
};

export default {
  getTickets,
  postTicket
}