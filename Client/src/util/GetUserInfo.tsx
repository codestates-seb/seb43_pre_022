import axios from 'axios';
import { useState, useEffect } from 'react';

const GetUserInfo = (id: string) => {
  const [data, setData] = useState({});
  const baseURL = 'http://localhost:8000/members/';

  axios
    .get(`${baseURL}` + id)
    .then(response => {
      console.log(data);
      setData(JSON.stringify(response));
    })
    .catch(error => console.log(error));

  return data;
};

export default GetUserInfo;
