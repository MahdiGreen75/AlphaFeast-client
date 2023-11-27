import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import FormValidationProvider from './providers/FormValidationProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FormValidationProvider>
        <RouterProvider router={router} />
      </FormValidationProvider>
    </AuthProvider>
  </React.StrictMode>
)
