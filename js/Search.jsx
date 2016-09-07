var React = require('react')
var ShowCard = require('./ShowCard')
const {object} = React.PropTypes
const Header = require('./Header')
var Search = React.createClass({
  getInitialState () {
    return {
      search_term: ''
    }
  },
  handleSearch (searchTerm) {
    this.setState({
      search_term: searchTerm
    })
  },
  propTypes: {
    route: object
  },
  render () {
    return (
      <div className='container'>
        <Header
          search_term={this.state.search_term}
          handleSearch={this.handleSearch}
          isSearch
        />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.state.search_term.toUpperCase()) >= 0)
            .map((show, key) => (
              <ShowCard key={show.imdbID} show={show} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
