import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('https://play.nextcaddy.com/api/login_check', {
      username: username,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data.token;  // Suponiendo que el token se encuentra en response.data.token
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
