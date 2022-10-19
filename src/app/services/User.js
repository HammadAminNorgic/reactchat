import axios from 'axios';
import { API_URL } from '../config';
const User = {
    login: (data) => {
      return axios.post(`${API_URL}Login`,data,{
        headers: {
            "Content-Type": `application/json`,
          }
      });
    },
    signup: (data) => {
      return axios.post(`${API_URL}SignUp`,data,{
      headers: {
        "Content-Type": `application/json`,
      },
    });
    },

  };
  export default User;