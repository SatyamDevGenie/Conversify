import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
  const [socket, setSocket] = useState(null);
  const { authUser } = useSelector((store) => store.user);

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
