import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h2 className='text-yellow-700'> Mini Context  </h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
