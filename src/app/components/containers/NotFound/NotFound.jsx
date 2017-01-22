import React from 'react'
import { Link } from 'react-router'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        NotFound page
        <Link to="/">to home</Link>
        <Link to="/other">to other</Link>
      </div>
    )
  }
}

export default NotFound
