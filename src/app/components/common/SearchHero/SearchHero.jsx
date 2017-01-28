import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, focus, Form } from 'redux-form'

const style = process.browser ? require('./SearchHero.css') : {}

class SearchHero extends React.Component {
  componentDidMount() {
  }

  getValue = () => {
    const { form } = this.props
    if(form && form.values && form.values.searchInput) return form.values.searchInput
    return null
  }

  clearSearchInput = (e) => {
    e.preventDefault()
    this.props.reset()
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <section className={style.component}>
        <div className={style.searchWrapper}>
          <Form className={style.searchForm} onSubmit={this.handleSubmit}>
            { this.getValue() && <button className={style.clearField} type="button" onClick={ this.clearSearchInput }>Clear field</button> }
            <Field
              className={style.searchInput}
              ref={(el) => {this.searchInput = el}}
              component="input"
              type="text"
              name="searchInput"
              placeholder="What course are you looking for?"
              autoComplete="off"
            />
          </Form>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form.search
})

const mapDispatchToProps = dispatch => ({
  focus: () => dispatch(focus('search', 'searchInput')),
  reset: () => dispatch(reset('search'))
})

SearchHero = connect(mapStateToProps, mapDispatchToProps)(SearchHero)
SearchHero = reduxForm({ form: 'search' })(SearchHero)

export default SearchHero
