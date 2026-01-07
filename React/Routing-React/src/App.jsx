import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Param from './components/Param';
import PageNotFound from './components/PageNotFound';

// import missing child components
import Courses from './components/Courses';
import Mock from './components/Mock';
import Reports from './components/Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mock-test",
        element: <Mock />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <NavBar />
        <Param />
      </div>
    ),
  },

  {
    path:'*',
    element: <PageNotFound/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
