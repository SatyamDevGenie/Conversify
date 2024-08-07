import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch(); // to dispatch actions.......

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; // important line to remember for CORS ERROR......
        const res = await axios.get(`http://localhost:8000/api/v1/user`);

        // store
        console.log("other users -> ", res);
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers(); // function calling here......
  }, []);
};

export default useGetOtherUsers;
