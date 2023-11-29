import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import FormValidationProvider from './providers/FormValidationProvider.jsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import MealReqProvider from './providers/mealReqProvider.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <FormValidationProvider>
          <MealReqProvider>
            <RouterProvider router={router} />
          </MealReqProvider>
        </FormValidationProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
