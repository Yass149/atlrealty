import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '840061b987mshf83588739c1b872p119e66jsn71dfbea7f3ba',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
  });
    
  return data;
}