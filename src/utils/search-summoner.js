import { NODE_SERVER, ROUTES } from '../config';

const retrieveSummoner = async (summonerName) => {
  try {
    const response = await fetch(`${NODE_SERVER.baseUrl}/${ROUTES.getSummoner}/${summonerName}`);
    const data = await response.json();

    if (data.status !== undefined) {
      return {
        message: data.status.message,
        result: false,
        loading: false,
      };
    }
    return {
      ...data,
      message: '',
      result: true,
      loading: false,
    };
  } catch (error) {
    return {
      message: 'Backend error',
      result: false,
      loading: false,
    };
  }
};

export default retrieveSummoner;
