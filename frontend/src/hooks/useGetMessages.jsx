import axios from "axios";
import { useEffect } from "react";

const useGetMessages = () => {
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/66a47435d6eab480f9b3c3c5`
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, []);
};

export default useGetMessages;
