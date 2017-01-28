import React from 'react'
import { reduxForm, Field } from 'redux-form'

const style = process.browser ? require('./SearchHero.css') : {}

class SearchHero extends React.Component {
  componentDidMount() {
    this.textInput.focus()
  }

  render() {
    return (
      <section className={style.component}>
        <div className={style.searchWrapper}>
          <form>
            <Field
              className={style.searchInput}
              component="input"
              type="text"
              name="search"
              placeholder="What course are you looking for?"
            />
          </form>
        </div>
      </section>
    )
  }
}

SearchHero = reduxForm({ form: 'search' })(SearchHero)

export default SearchHero
