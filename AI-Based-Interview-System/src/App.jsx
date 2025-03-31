import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Frame from './components/Frame';
import Premium from './components/Premium';
import About from './components/About';
import Navi from './components/nav';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';

function Logout() {
   localStorage.clear()
   return <Navigate to="/Login" />
}

function RegisterAndLogout() {
   localStorage.clear()
   return <Register/>
}


const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <ProtectedRoute> <Frame /> </ProtectedRoute>
      },

      {

         path: "/Premium",
         element: <Premium />,

      },

      {
         path: "/About",
         element: <About />,
      },

      {
         path: "/Login",
         element: <Login />,
      },
      
      {
         path: "/Register",
         element: <RegisterAndLogout/>
      },
      
      {
         path: "/Logout",
         element: <Logout />,
      },

     {
         path: "*",
         element: <NotFound />,
      }
   ]
);

function App() {

   return (
      <div className='md:mt-52 mt-28 duration-1000'>
         <Navi />
         <RouterProvider router={router} />
      </div>
   );
}

export default App
