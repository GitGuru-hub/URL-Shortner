import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout