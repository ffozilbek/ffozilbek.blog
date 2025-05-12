import { createBrowserRouter } from "react-router";
import { HomePage,AboutPage,BlogPage, BlogPostPage } from "./user/pages";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "blog", Component: BlogPage },
      { path: "about", Component: AboutPage },
      { path: "post/:id", Component: BlogPostPage },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App