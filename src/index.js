import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import GitHub from './pages/GitHub.jsx'
import LanguageLayout from './pages/LanguageLayout.jsx'
import Resume from './pages/Resume.jsx'
import ErrorPage from './components/ErrorPage.jsx'

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
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/:id',
        element: <LanguageLayout />,
        errorElement: <ErrorPage />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
