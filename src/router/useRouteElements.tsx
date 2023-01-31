import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import { path } from '../constants/path'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ProductDetails from './../pages/ProductDetail/ProductDetails'
import NotFound from './../pages/NotFound/NotFound'
import Home from './../pages/Home/Home'
import Cart from './../pages/Cart/Cart'

const isAuthenticated = true
/* A function that is used to check if the user is authenticated or not. If the user is authenticated,
it will redirect to the home page. If not, it will redirect to the login page. */
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/auth/login' />
}

/* A function that is used to check if the user is authenticated or not. If the user is authenticated,
it will redirect to the home page. If not, it will redirect to the login page. */
function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  /* A function that is used to check if the user is authenticated or not. If the user is
  authenticated,
  it will redirect to the home page. If not, it will redirect to the login page. */
  const routeElements = useRoutes([
    // reject route
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: <Login />
        },
        {
          path: path.register,
          element: <Register />
        }
      ]
    },
    // protected routes
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.cart,
          element: (
            <>
              <Cart />
            </>
          )
        }
      ]
    },
    // route normal
    {
      path: path.home,
      index: true,
      element: <Home />
    },

    {
      path: '*',
      element: <NotFound />
    },
    {
      path: path.productDetail,
      element: <ProductDetails />
    }
  ])
  return routeElements
}
