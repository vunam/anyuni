import React from 'react'
import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'

if (process.browser) require('./Globals.css')

const Main = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Main
