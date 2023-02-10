import React from 'react'
import { useSelector } from 'react-redux'

function HeaderUserDetails() {
    const { loginUserDetails } = useSelector(state=>state.user)
    console.log("from headerusername ",userDetails)
  return (
    <div>

    </div>
  )
}

export default HeaderUserDetails