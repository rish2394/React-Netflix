const React = require('react')
const {Link} = require('react-router')
console.log('In Landing Route')
const Landing = () => (

    <div className='home-info'>
      <h1 className='title'>search videos</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='search' className='browse-all'>or Browse-all</Link>
    </div>
  
)

module.exports = Landing
