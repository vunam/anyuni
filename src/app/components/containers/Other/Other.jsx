import React from 'react'
import { Link } from 'react-router'

class Other extends React.Component {
  render() {
    return (
      <div>
        Other page
        <Link to="/">to home</Link>
      </div>
    )
  }
}

export default Other
