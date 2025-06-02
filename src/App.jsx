import { createBrowserRouter, useLocation } from "react-router";
import { HomePage, AboutPage, BlogPage, BlogPostPage } from "./pages";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { useEffect } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "blog", element: <BlogPage/> },
        { path: "about", element: <AboutPage /> },
        { path: "blog/:id", element: <BlogPostPage /> },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default App;
