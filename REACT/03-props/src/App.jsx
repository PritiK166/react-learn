import React from 'react'
import Card from '../../02-components/components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Aman" age={35} img='https://plus.unsplash.com/premium_photo-1748187807825-b7464b80d9ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776'/>
      <Card user="Sarthak" age={22} img='https://images.unsplash.com/photo-1757600865394-0b556b5223a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'/>
      <Card user="Aditya" age={22} img='https://images.unsplash.com/photo-1756474215958-f0c2a31eddc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&cdw=764'/>
    </div>
  )
}

export default App