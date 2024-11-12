import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import Shop from './components/pages/Shop/Shop.tsx'
import { store } from './store.ts'
import Cart from './components/pages/Cart/cart.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/about',
        element: <></>
      },
      {
        path: '/contact',
        element: <></>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
