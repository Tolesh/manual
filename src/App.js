import './App.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import Desktop from './Desktop'
import Cookies from './policy/cookies'
import Privacy from './policy/privacy'
import Terms from './policy/terms'


import {
  useReducer,
} from 'react'

import {
  Context,
  initialState,
} from './store/Context'

import {
  reducer,
} from './store/reducer'

function RouteElementsDesktop() {
  const routeElements = useRoutes([
    { path: '/', element: <Desktop /> },
    { path: '/policy/cookies', element: <Cookies /> },
    { path: '/policy/privacy', element: <Privacy /> },
    { path: '/policy/terms', element: <Terms /> },
  ]);
  return routeElements
}


function DesktopApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  
  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsDesktop />
      </BrowserRouter>
    </Context.Provider>
  )
}


function App() {
  return(
    <DesktopApp />
  )
}

export default App
