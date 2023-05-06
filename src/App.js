import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Result from "./pages/Result";
import Container from "./pages/Container";
import Shorts from "./pages/Shorts";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // 메인
        index: true,
        element: <Container />,
      },
      {
        // 검색 결과 알려줌
        path: `result/*`,
        element: <Result />,
      },
      {
        // 쇼츠
        path: "shorts/*",
        element: <Shorts />,
      },
      {
        // 에러 페이지
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
