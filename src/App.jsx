import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Top from './Components/Top'
import ErrorPage from './Components/Error'
import Loader from './Components/Loader'

const App = () => {
  document.querySelector('body').addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.ctrlKey === true) {
      document.querySelector('html').style.background = '#0D1117'
      document.querySelector('body').style.background = '#0D1117'
      document.querySelector('html').style.color = '#fff'
      document.querySelector('body').style.color = '#fff'
      document.querySelector('.custom-shape-divider-top-1610786056',).style.display = 'none'
    } else if (event.key === 'E') {
      document.querySelector('html').style.background = '#fff'
      document.querySelector('body').style.background = '#fff'
      document.querySelector('html').style.color = '#000'
      document.querySelector('body').style.color = '#000'
      document.querySelector('.custom-shape-divider-top-1610786056',).style.display = 'block'
    }
  })
  return (
    <>
      <Loader />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/meu-portfolio/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <Top />
    </>
  )
}
export default App
