import React from 'react';
import Header from './common/header/index'
import { GlobalStyle } from './style'
import { GlobalIconfontStyle } from './static/iconfont11/iconfont'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <div>
      <GlobalIconfontStyle />
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
