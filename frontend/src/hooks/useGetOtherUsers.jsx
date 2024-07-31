import axios from "axios";
import React, { useEffect } from "react";

const useGetOtherUsers = () => {
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; // important line to remember for CORS ERROR......
        const res = await axios.get(`http://localhost:8000/api/v1/user/`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers(); // function calling here......
  });

  return <div>useGetOtherUsers</div>;
};

export default useGetOtherUsers;
