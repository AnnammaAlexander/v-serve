import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ToastContainer> */}
      <Provider store={store}>
    <ThemeProvider>

    <App />
    </ThemeProvider>
    </Provider>
    {/* </ToastContainer> */}
  </React.StrictMode>,
)
