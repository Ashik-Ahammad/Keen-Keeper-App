import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root'
import Timeline from './components/Timeline/Timeline'
import Stats from './components/Stats/Stats'
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },

    ],
  },
  {
    path: '/timeline',
    Component: Timeline,
  },
  {
    path: '/stats',
    Component: Stats,
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
