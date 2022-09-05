import axios from 'axios';

export const getProducts = async (searchTerm, pageSize) => {
  try {
    const products = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&limit=${pageSize}&media=music`);
    return products.data;
  } catch (error) {
    console.log('getProducts:', error);
    throw error;
  }
};