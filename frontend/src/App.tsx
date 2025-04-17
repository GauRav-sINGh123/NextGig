import Layout from './Layout';
import {Homepage,Login,Signup,Profile,ExploreJobs,Admin,Jobs,Careers,CreateCompany} from './pages/index'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,  
    children: [
      { 
        path: "", 
        element: <Homepage /> 
      },
      { 
        path: "profile",
        element: <Profile /> 
      },
      { 
        path: "explore", 
        element: <ExploreJobs /> 
      },
      { 
        path: "jobs", 
        element: <Jobs /> 
      },
      { 
        path: "careers", 
        element: <Careers /> 
      },
      { path: "admin", 
        element: <Admin /> 
      },
      { 
        path: "admin/create-company", 
        element: <CreateCompany /> 
      },
    ],
  },
  { 
    path: "/login", 
    element: <Login /> 
  },
  { 
    path: "/signup", 
    element: <Signup /> 
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px:4 md:px-14">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;