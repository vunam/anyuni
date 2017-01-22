import React from 'react'
import { render } from 'react-dom'
import Root from '../app/components/Root'
import Routes from '../app/components/Routes'

const renderClient = () => {
  render(
    <Root routes={Routes} />,
    document.getElementById('root')
  )
}

renderClient()
