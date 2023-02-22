import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Home from './components/Home'
import './App.css'
import { CheckUserExist} from './helper/helper'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
    )
}

export default App
