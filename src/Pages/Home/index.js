import React from 'react'
import Banner from '../../Components/home/banner/Banner'
import ProductGrid from '../../Components/home/ProductGrid'
const Home = () => {
  return (
    <React.Fragment>
    <Banner/>
    <ProductGrid  pageslug={"home"}/>
    </React.Fragment>
    )
}

export default Home