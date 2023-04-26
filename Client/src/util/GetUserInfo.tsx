import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetUserInfo = async (id: string) => {
  const [data, setData] = useState('');
  const Navigation = useNavigate();
  const baseURL =
    'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/members/';

  try {
    await axios
      .get(baseURL + id, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoianVzMkBjb2RlLmNvbSIsIm1lbWJlcklkIjo3LCJzdWIiOiJqdXMyQGNvZGUuY29tIiwiaWF0IjoxNjgyNDY4NDAyLCJleHAiOjE2ODI0OTM2MDJ9.5JtTtN-lVjflo4-zs8SchEtKxfROu_4cNGYyoZ6nv94',
        },
      })
      .then((response) => {
        console.log(response);
        const userinfo = response.data;
        setData(userinfo!);
      });
  } catch (error) {
    Navigation('/error');
  }
  return JSON.parse(data);
};

export default GetUserInfo;
