import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GitHub from './GitHub.jsx'
import LauguageLayout from './LauguageLayout.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        index: true,
        element: <App />
    },
    {
        path: '/github',
        element: <GitHub />
    },
    {
        path: '/:id',
        element: <LauguageLayout />,
        errorElement: <ErrorPage />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

export function ErrorPage(){
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1>404</h1>
            <h1>Page Not Found</h1>
        </div>
    )
}