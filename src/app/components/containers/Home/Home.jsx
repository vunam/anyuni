import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
        Home page
        <Link to="other">Other</Link>
      </div>
    )
  }
}

export default Home
