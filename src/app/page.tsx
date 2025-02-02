import Header from '../Pages/search/index'
// import Homes from '../Pages/home/index'
import './globals.css'
// import Image from 'next/image'
// import Layout from '@/Pages/pages'
import Navbar from '../Pages/Navbar/index'

export default function Home() {
  return (
    <div className='main-pag'>
      <Navbar />

      <Header />
    </div>
  )
}
