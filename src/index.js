import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-a80uc87x3drxrj3j.us.auth0.com"
  clientId="mQbNiu5c8Z1Zd4GsQm9HVVXTkjsSyvx4"
  authorizationParams={{redirect_uri: window.location.origin}}>
  
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
