import { Button } from 'antd'
import React from 'react'

const Home = () => {
    let logout = ()=>{
        localStorage.removeItem('authToken')
        window.location.reload()
    }
  return (
    <Button type='primary' onClick={logout}>Log Out</Button>
  )
}

export default Home