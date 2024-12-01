import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Jobs, { JobsLoader } from "./Pages/Jobs";
import JobsDetail, { JobsDetailLoader } from "./Pages/JobsDetail";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Page404 from "./PageNotFound/Page404";
import RouteLayout from "./Layout/RouteLayout";
import JobsLayout from "./Layout/JobsLayout";
import Login from "./Login-Signup/Login";
import Signup from "./Login-Signup/Signup";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={JobsLoader} />
          <Route
            path=":id"
            element={<JobsDetail />}
            loader={JobsDetailLoader}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
