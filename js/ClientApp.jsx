const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const {Router, IndexRoute, Route, hashHistory} = require('react-router')
const Search = require('./Search')
const Details = require('./Details')
const {shows} = require('../public/data')

const App = React.createClass({
  Transition (nextState, replace) {
    const showArr = shows.filter((show) => show.imdbID === nextState.params.id)
    console.log('nextState', nextState)
    console.log('replace', replace)

    if (showArr.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, showArr[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.Transition} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
