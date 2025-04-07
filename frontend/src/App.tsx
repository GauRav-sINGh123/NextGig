import {Homepage,Login,Signup,Profile,ExploreJobs,Admin,Jobs,Careers} from './pages/index'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 const router=createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/explore',
    element:<ExploreJobs/>
  },
  {
    path:'/admin',
    element:<Admin/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/career',
    element:<Careers/>
  }
 ])
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px:4 md:px-14">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;