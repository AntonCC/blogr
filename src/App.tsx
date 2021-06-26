import React from 'react';
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'

const routes = [
  {path: '/', name: 'Home', component: Home}
]

const StyledApp = styled.div`
  min-width: 370px;
`

const App = () => { 
  return (
    <StyledApp>
       <Navbar />
      <Switch>
        {
          routes.map(({ path, name, component}) => (
            <Route key={name} exact path={path} component={component} />
          ))
        }
      </Switch>
    </StyledApp>
  );
}

export default App;
