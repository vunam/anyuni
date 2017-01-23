import React from 'react'
const style = process.browser ? require('./SearchHero.css') : {}

const SearchHero = () => (
  <div className={style.SearchHero}>
    <input type="text" />
  </div>
)

export default SearchHero
