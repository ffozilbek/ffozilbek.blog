import { createBrowserRouter, useLocation } from "react-router";
import { HomePage, AboutPage, BlogPage, BlogPostPage } from "./pages";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { useEffect } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "blog", Component: BlogPage },
        { path: "about", Component: AboutPage },
        { path: "posts/:id", Component: BlogPostPage },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default App;
