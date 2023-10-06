import React from 'react'
import Home from './src/app/components/Home'
import { Provider } from 'react-redux'
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

export default App