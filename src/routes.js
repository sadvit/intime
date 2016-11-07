import React from 'react'
import { Router, Route } from 'react-router'
import IndexPage from './pages/IndexPage'
import MessagesPage from './pages/MessagesPage'

export default <Router>
  <Route path="index" component={IndexPage}/>
  <Route path="messages" component={MessagesPage}/>
</Router>
