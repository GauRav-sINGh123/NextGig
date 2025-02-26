import {Homepage,Login,Signup} from './pages/index'
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
  }
 ])
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px:4 md:px-20">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;