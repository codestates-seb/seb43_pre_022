import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetUserInfo = async (id: string) => {
  const [data, setData] = useState({});
  const Navigation = useNavigate();
  const baseURL =
    'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/members/';

  try {
    await fetch(`${baseURL}${id}`, {
      method: 'GET',
    }).then((response) => {
      //  JSON data 변환해주어야하는지
      response.json();
      const userinfo = response.body;
      setData(userinfo!);
    });
  } catch (error) {
    Navigation('/error');
  }
  return data;
};

export default GetUserInfo;
