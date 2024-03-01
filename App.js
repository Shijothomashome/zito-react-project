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


const AppLayout = () => {

  return (
    <>
      <Header />
       <Outlet />
      <Footer />
    </>
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
        path: "restaurant/:id",
        element: <RestaurantMenu />
      }
    
    ]
  }
  

])

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);