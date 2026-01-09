import React from 'react'
import { useDispatch} from 'react-redux'
import authService from '../../appwrite/auth.service'
import { logout } from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <button 
      className=''
      onClick={logoutHandler}
    >LogoutBtn</button>
  )
}

export default LogoutBtn