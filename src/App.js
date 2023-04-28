import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import VideoPage from "./pages/VideoPage";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: "동영상경로",
    element: <VideoPage />,
    errorElement: <NotFound />,
  },
  {
    path: "a",
    element: <Result />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
