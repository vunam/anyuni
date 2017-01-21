import React from 'react'
import { render } from 'react-dom'
import Root from '../app/components/Root'

const renderClient = () => {
  render(
    <Root />,
    document.getElementById('root')
  )
}

export default renderClient
