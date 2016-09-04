const React = require('react')
const Data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchEvent (event) {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>search video</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchEvent} />
        </header>
        <div className='shows'>
          {Data.shows.filter((show) => `${show.title}${show.description}`.toUpperCase()
                                        .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                                        .map((show) => (
                                           <ShowCard show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
