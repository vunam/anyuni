import React from 'react'

const style = process.browser ? require('./SearchHero.css') : {}

class SearchHero extends React.Component {
  componentDidMount() {
    this.textInput.focus()
  }

  render() {
    return (
      <section className={style.component}>
        <div className={style.searchWrapper}>
          <input
            className={style.searchInput}
            ref={((el) => { this.textInput = el })}
            type="text"
            placeholder="What course are you looking for?"
          />
        </div>
      </section>
    )
  }
}

export default SearchHero
