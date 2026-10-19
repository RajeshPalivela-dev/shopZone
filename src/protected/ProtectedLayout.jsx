import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'


const ProtectedLayout = () => {

    const loginToken=localStorage.getItem("loginToken")
    if(!loginToken){
       return <Outlet/>
    }
      return <Navigate to="/" replace />;
  return (
    <div>
        
    </div>
  )
}

export default ProtectedLayout