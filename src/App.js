import React from 'react';
import Header from './common/header/index'
import { GlobalStyle } from './style'
import { GlobalIconfontStyle } from './static/iconfont/iconfont'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div>
      <GlobalIconfontStyle />
      <GlobalStyle />
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
