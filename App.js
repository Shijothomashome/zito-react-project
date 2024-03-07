import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header';
import Body from './src/components/Body'
import Footer from './src/components/Footer';
const About = lazy(() => import('./src/components/About')) // lazy loading/dynamic loading/etc- never load this inside the functional component
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './src/components/RestaurantMenu';
import { Provider } from 'react-redux';
import store from './src/utils/store';
import Cart from './src/components/Cart';
import Faqs from './src/components/Faqs';


const AppLayout = () => {

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>loading...</div>}><About /></Suspense> //play in network using slow 3G to understand
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/faqs",
        element: <Faqs />
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }

])

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(
  <div className='pt-20'>
    <RouterProvider router={appRouter} />
  </div>
);