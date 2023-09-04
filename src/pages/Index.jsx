import React from 'react'
import Layout from "../components/layout/Index"
import HeroSection from '../section/HeroSection'
import CryptocurenncySection from '../section/coin/CryptocurenncySection'
import BuyandTradeSection from '../section/BuyandTradeSection'
import  PatnerSection from '../section/PatnerSection'
import CreditCard from '../section/CreditCard'
import TredingFooter from '../section/TredingFooter'
import SecuritySection from '../section/SecuritySection'
import BuyCrypto from '../section/BuyCrypto'
import Question from "../section/Question"
import BackToUp from '../section/BackToUp'
import Footer from "../components/footer/Footer"

const Index = () => {
  return (
    <Layout>
      <HeroSection/>
      <CryptocurenncySection/>
      <BuyandTradeSection/>
      <PatnerSection/>
      <CreditCard/>
      <TredingFooter/>
      <SecuritySection/>
      <BuyCrypto/>
      <Question/>
      <BackToUp/>
      <Footer/>
    </Layout>
  )
}

export default Index