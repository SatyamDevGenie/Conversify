import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  // const [socket, setSocket] = useState(null);

  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8000", {
        // withCredentials: true, // Enable credentials for CORS
        query: {
          userId: authUser._id,
        },
      });
      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUsers) => {
        // console.log("Connected to socket server");
        dispatch(setOnlineUsers(onlineUsers));
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from socket server");
      });

      return () => {
        socket.disconnect(); // Cleanup the socket connection on component unmount
      };

      // return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
