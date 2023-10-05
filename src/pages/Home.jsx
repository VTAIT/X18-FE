import React from 'react'
import Slider from '../components/Slider'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Slider />
            <Featured />
            {/* <Offer /> */}
            <Footer />
        </div>
    )
}

export default Home