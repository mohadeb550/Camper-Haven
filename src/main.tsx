import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/* sonner toaster  */}
    <Toaster position="top-center"  />
    
  <Provider store={store}>
     <RouterProvider router={router}/>
  </Provider>
   
   
  </React.StrictMode>,
)
