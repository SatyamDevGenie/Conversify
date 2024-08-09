// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import io from "socket.io-client";
// import "./App.css";
// import HomePage from "./components/HomePage";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

// function App() {
//   const [socket, setSocket] = useState(null);

//   const { authUser } = useSelector((store) => store.user);

//   useEffect(() => {
//     if (authUser) {
//       const newSocket = io("http://localhost:8000", {
//         // some code to be implement later onwards......
//       });
//       setSocket(newSocket);

//       return () => {
//         newSocket.disconnect();
//       };
//     }
//   }, [authUser]); // dependency array....

//   return (
//     <div className="p-4 h-screen flex items-center justify-center">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

// --------------------------------------------------------------------------------------------------------->

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
      const newSocket = io("http://localhost:8000", {
        withCredentials: true, // Enable credentials for CORS
      });
      setSocket(newSocket);

      newSocket.on("connect", () => {
        console.log("Connected to socket server");
      });

      newSocket.on("disconnect", () => {
        console.log("Disconnected from socket server");
      });

      return () => {
        newSocket.disconnect(); // Cleanup the socket connection on component unmount
      };
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
