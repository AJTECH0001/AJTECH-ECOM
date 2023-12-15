

import Announcement from '../Components/Announcements'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter /> 
      <Footer/>
    </div>
  )
}

export default Home
