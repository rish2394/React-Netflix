const React = require('react')
const {Link} = require('react-router')

const Header = React.createClass({
  propTypes: {
    isSearch: React.PropTypes.bool,
    handleSearch: React.PropTypes.func,
    search_term: React.PropTypes.string
  },
  handleSearchEvent (e) {
    this.props.handleSearch(e.target.value)
  },
  render () {
    let utilSpace
    if (this.props.isSearch) {
      utilSpace = <input className='search-input' value={this.props.search_term}
        type='text' placeholder='search' onChange={this.handleSearchEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
        )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = Header
