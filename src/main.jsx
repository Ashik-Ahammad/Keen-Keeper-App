import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root";
import Timeline from "./components/Timeline/Timeline";
import Stats from "./components/Stats/Stats";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import FriendDetails from "./components/FriendDetails/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "friend/:friendId",
        loader: async ({ params }) => {
          const res = await fetch("/friends.json");
          const data = await res.json();
          
          return data.find((friend) => friend.id === Number(params.friendId));
        },
        Component: FriendDetails,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
