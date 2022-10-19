import axios from 'axios';
import { API_URL } from '../config';
const Group = {
    getGroups: (data,token) => {
      return axios.post(`${API_URL}AllGroups`,{},{
        headers: {
            Authorization: `Bearer ${token}`
          }
      });
    },
    getAllUsers: (data,token) => {
        return axios.post(`${API_URL}AllUsers`,data,{
          headers: {
              Authorization: `Bearer ${token}`
            }
        });
      },
      createNewGroup: (data,token) => {
        return axios.post(`${API_URL}CreateGroup`,data,{
          headers: {
              Authorization: `Bearer ${token}`
            }
        });
      },
      renameGroup: (data,token) => {
        return axios.post(`${API_URL}RenameGroup`,data,{
          headers: {
              Authorization: `Bearer ${token}`
            }
        });
      },
      deleteGroup: (data,token) => {
        return axios.post(`${API_URL}DeleteGroup`,data,{
          headers: {
              Authorization: `Bearer ${token}`
            }
        });
      },
   

  };
  export default Group;