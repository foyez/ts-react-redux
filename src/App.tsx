import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { TodoList } from 'containers/TodoList'

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={TodoList} />
  </Switch>
)

export default App
