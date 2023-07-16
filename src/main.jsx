import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Main from './layout/Main';
import Register from './pages/register/Register';
import ChefRecipe from './pages/chef-recipe/ChefRecipe';
import AuthProvider from './provider/AuthProvider';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './pages/errorPage/ErrorPage';
import ErrorLayout from './layout/ErrorLayout';
import Blog from './pages/chefNav/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chef-recipe/:id',
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-master-server-abdullahmsiam.vercel.app/chefs/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/',
    element: <ErrorLayout></ErrorLayout>,
    children: [
      {
        path: '/*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
