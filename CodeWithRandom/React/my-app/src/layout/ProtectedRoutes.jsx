import React from 'react'

const ProtectedRoutes = ({children}) => {
    const isLoggedIn=false;
  return (
    <>
    <div>
        {
            isLoggedIn?(
                children
            ):(
                <h1>Please Sign up</h1>
            )
        }
    </div>
    </>
  )
}

export default ProtectedRoutes